import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn5kgc44z.css';
import '../../css/k/kzsbztbag.css';
import '../../css/a/axjbu5tsj.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="jn5kgc44z"/><path class="kzsbztbag"/><path class="axjbu5tsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:uml-light"} {...others} />);
}

export default Component;
