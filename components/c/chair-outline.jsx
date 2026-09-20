import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/huh16ccpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="huh16ccpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chair-outline"} {...others} />);
}

export default Component;
