import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjqv8bbgf.css';
import '../../css/r/rp7qrtb3b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cjqv8bbgf"/><path class="rp7qrtb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:certificate"} {...others} />);
}

export default Component;
