import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv9bp2bij.css';
import '../../css/g/g-trd5b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vv9bp2bij"/><path class="g-trd5b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:knob-fill"} {...others} />);
}

export default Component;
