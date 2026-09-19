import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hw3nf160s.css';
import '../../css/o/o7fygmbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hw3nf160s"/><path class="o7fygmbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:alert-diamond"} {...others} />);
}

export default Component;
