import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/negpwd9jd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="negpwd9jd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:venmo"} {...others} />);
}

export default Component;
