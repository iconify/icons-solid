import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8oo2l78d.css';
import '../../css/e/ejzs483gk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z8oo2l78d"/><path clip-rule="evenodd" class="ejzs483gk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:boolean-union-16"} {...others} />);
}

export default Component;
