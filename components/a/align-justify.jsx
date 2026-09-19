import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on_u07ckd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="on_u07ckd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:align-justify"} {...others} />);
}

export default Component;
