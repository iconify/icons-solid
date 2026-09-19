import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9975k8sf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p9975k8sf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:box-3d-fill-16"} {...others} />);
}

export default Component;
