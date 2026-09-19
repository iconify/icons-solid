import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1rwnbp7q.css';
import '../../css/q/qru7a6bvm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c1rwnbp7q"/><path class="qru7a6bvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-glassdoor"} {...others} />);
}

export default Component;
