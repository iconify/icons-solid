import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvkbhebit.css';

const viewBox = {"width":386,"height":390};
const content = `<path clip-rule="evenodd" class="cvkbhebit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:goil-dark"} {...others} />);
}

export default Component;
