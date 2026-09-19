import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oscgc-brr.css';
import '../../css/r/rukfmib6m.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="oscgc-brr"/><path class="rukfmib6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:switch-filled"} {...others} />);
}

export default Component;
