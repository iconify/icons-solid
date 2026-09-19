import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dihsqs3sw.css';
import '../../css/o/o69vp97da.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dihsqs3sw"/><path class="o69vp97da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:type-pattern"} {...others} />);
}

export default Component;
