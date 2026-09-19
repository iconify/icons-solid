import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-vwe2b6w.css';
import '../../css/f/fzp2tmx2o.css';
import '../../css/a/a6-7rqb6n.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="e-vwe2b6w"/><path class="fzp2tmx2o"/><path class="a6-7rqb6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:bevyengine"} {...others} />);
}

export default Component;
