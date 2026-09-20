import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9xhsfe6o.css';
import '../../css/o/ooilqmbnh.css';
import '../../css/n/nga-i0ykp.css';

const viewBox = {"width":60,"height":60};
const content = `<path class="a9xhsfe6o"/><path class="ooilqmbnh"/><path class="nga-i0ykp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mobilizon"} {...others} />);
}

export default Component;
