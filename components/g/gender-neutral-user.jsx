import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl9p_ccsj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tl9p_ccsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:gender-neutral-user"} {...others} />);
}

export default Component;
