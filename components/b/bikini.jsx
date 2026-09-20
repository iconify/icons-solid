import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_5pycbka.css';
import '../../css/b/bjttmb9ho.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="h_5pycbka"/><path class="bjttmb9ho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bikini"} {...others} />);
}

export default Component;
