import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg2nk7h4t.css';
import '../../css/p/p5j9y8bnl.css';
import '../../css/k/kkgzrnb_y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mg2nk7h4t"/><path class="p5j9y8bnl"/><path class="kkgzrnb_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:bucklescript"} {...others} />);
}

export default Component;
