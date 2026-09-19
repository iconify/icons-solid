import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exm6s8_rj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="exm6s8_rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:codacy"} {...others} />);
}

export default Component;
