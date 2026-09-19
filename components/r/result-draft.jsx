import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw9l9zbzr.css';
import '../../css/g/gjykr6brl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aw9l9zbzr"/><path class="gjykr6brl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:result-draft"} {...others} />);
}

export default Component;
