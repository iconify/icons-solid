import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx1sf_bkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zx1sf_bkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:braces-check"} {...others} />);
}

export default Component;
