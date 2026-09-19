import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o26ov_4lg.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="o26ov_4lg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:full-width-edit"} {...others} />);
}

export default Component;
