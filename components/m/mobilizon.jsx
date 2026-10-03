import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9xhsfe6o.css';
import '../../css/h/h35hfnqor.css';
import '../../css/e/ehfvjlbpp.css';

const viewBox = {"width":60,"height":60};
const content = `<path class="a9xhsfe6o"/><path class="h35hfnqor"/><path class="ehfvjlbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mobilizon"} {...others} />);
}

export default Component;
