import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw73jobqx.css';
import '../../css/r/ra2lh9qeu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yw73jobqx"/><path class="ra2lh9qeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-react"} {...others} />);
}

export default Component;
