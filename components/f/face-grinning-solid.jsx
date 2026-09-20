import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi4wy4h2j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xi4wy4h2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:face-grinning-solid"} {...others} />);
}

export default Component;
