import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/puno4n5gf.css';
import '../../css/u/ufakx9rlh.css';

const viewBox = {"width":511.875,"height":511.824};
const content = `<path class="puno4n5gf"/><path class="ufakx9rlh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:racket"} {...others} />);
}

export default Component;
