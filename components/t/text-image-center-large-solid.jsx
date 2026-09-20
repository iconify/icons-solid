import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj966c6gj.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="pj966c6gj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:text-image-center-large-solid"} {...others} />);
}

export default Component;
