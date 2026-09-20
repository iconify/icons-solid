import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6jgc5b_g.css';
import '../../css/h/hllvxmbbi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f6jgc5b_g"/><path class="hllvxmbbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:settings-thick-duotone"} {...others} />);
}

export default Component;
