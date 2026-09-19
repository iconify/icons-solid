import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsjtpacxr.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="xsjtpacxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:caret-bottom-right-center-8"} {...others} />);
}

export default Component;
