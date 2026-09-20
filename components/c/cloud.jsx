import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpg-ue7bx.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="jpg-ue7bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:cloud"} {...others} />);
}

export default Component;
