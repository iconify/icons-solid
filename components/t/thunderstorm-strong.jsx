import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9jqg7p9p.css';
import '../../css/y/yrb5ix9ih.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d9jqg7p9p"/><path class="yrb5ix9ih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:thunderstorm-strong"} {...others} />);
}

export default Component;
