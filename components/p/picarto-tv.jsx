import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnmm_rbxz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jnmm_rbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:picarto-tv"} {...others} />);
}

export default Component;
