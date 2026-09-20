import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj1s1w6dc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hj1s1w6dc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:compress"} {...others} />);
}

export default Component;
