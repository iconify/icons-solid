import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9bg9h1um.css';
import '../../css/t/txkp30byp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c9bg9h1um"/><path class="txkp30byp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sfund"} {...others} />);
}

export default Component;
