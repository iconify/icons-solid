import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7bj30f0q.css';
import '../../css/t/thj5gk-ag.css';
import '../../css/r/rututhb5h.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="w7bj30f0q"/><path class="thj5gk-ag"/><path class="rututhb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:task-location"} {...others} />);
}

export default Component;
