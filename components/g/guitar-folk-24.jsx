import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp_7xjl5p.css';
import '../../css/s/s27o98huz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zp_7xjl5p"/><path class="s27o98huz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:guitar-folk-24"} {...others} />);
}

export default Component;
