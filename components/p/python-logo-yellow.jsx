import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzp9m4bgk.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="kzp9m4bgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:python-logo-yellow"} {...others} />);
}

export default Component;
