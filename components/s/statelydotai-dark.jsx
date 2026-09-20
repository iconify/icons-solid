import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek6sb0brr.css';

const viewBox = {"width":1000,"height":405};
const content = `<path class="ek6sb0brr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:statelydotai-dark"} {...others} />);
}

export default Component;
