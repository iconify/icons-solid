import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1zr6vb5v.css';
import '../../css/e/ee-m9bcyn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="u1zr6vb5v"/><path class="ee-m9bcyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:clean"} {...others} />);
}

export default Component;
