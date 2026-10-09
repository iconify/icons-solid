import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y30s81bis.css';
import '../../css/b/bgmrj3pax.css';
import '../../css/w/wx83d8hml.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y30s81bis"/><path class="bgmrj3pax"/><path class="wx83d8hml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biogas-digester-20"} {...others} />);
}

export default Component;
