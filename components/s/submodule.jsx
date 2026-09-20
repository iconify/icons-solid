import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd2khn9on.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vd2khn9on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:submodule"} {...others} />);
}

export default Component;
