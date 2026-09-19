import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt4e19b6m.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="gt4e19b6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:i-r-m-forward"} {...others} />);
}

export default Component;
