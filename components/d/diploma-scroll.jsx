import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-3dycbxq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r-3dycbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:diploma-scroll"} {...others} />);
}

export default Component;
