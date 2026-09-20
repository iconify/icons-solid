import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whqk7pb1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="whqk7pb1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transmission-square-outline"} {...others} />);
}

export default Component;
