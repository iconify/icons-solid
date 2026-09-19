import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3yoq-5dj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z3yoq-5dj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:zos-sysplex"} {...others} />);
}

export default Component;
