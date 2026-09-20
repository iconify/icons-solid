import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/go8ehsr3x.css';
import '../../css/z/zut4dr69s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="go8ehsr3x"/><path class="zut4dr69s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:copyright"} {...others} />);
}

export default Component;
