import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnjhzbbpw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qnjhzbbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-climbing-with-climbing-rope"} {...others} />);
}

export default Component;
