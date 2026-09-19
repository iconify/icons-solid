import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrndicbcc.css';
import '../../css/a/a8h6erbng.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mrndicbcc"/><path class="a8h6erbng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rewind-5"} {...others} />);
}

export default Component;
