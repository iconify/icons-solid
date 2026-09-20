import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/baacqjbhs.css';
import '../../css/j/j90iobcke.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="baacqjbhs"/><path class="j90iobcke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:filebrowser-quantum-dark"} {...others} />);
}

export default Component;
