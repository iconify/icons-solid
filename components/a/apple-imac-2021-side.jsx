import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpp35q0pw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xpp35q0pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:apple-imac-2021-side"} {...others} />);
}

export default Component;
