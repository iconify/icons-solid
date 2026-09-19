import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy-xt_bua.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hy-xt_bua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:binoculars"} {...others} />);
}

export default Component;
