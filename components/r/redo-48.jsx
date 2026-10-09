import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ooff228am.css';
import '../../css/d/d0qdug7jo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ooff228am"/><path class="d0qdug7jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:redo-48"} {...others} />);
}

export default Component;
