import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn-i8lbtr.css';
import '../../css/r/r5r-9rbtq.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="zn-i8lbtr"/><path class="r5r-9rbtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:nutrition"} {...others} />);
}

export default Component;
