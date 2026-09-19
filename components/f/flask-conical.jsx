import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ioovyo8cb.css';
import '../../css/e/ejsn6_b0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ioovyo8cb"/><path class="ejsn6_b0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flask-conical"} {...others} />);
}

export default Component;
