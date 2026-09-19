import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/ftrpiw36b.css';
import '../../css/q/qr5olie7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ftrpiw36b"/><path class="qr5olie7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-check-out-01"} {...others} />);
}

export default Component;
