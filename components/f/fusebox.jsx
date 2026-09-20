import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bipjpivux.css';
import '../../css/u/uaeuutbxn.css';
import '../../css/l/lbylr-x0i.css';
import '../../css/c/cgc693h8m.css';
import '../../css/l/lqwy_ob4l.css';
import '../../css/f/fsl16nhqi.css';
import '../../css/b/b_-pogbrn.css';

const viewBox = {"width":152.99,"height":160.01};
const content = `<path class="bipjpivux"/><path class="uaeuutbxn"/><path class="lbylr-x0i"/><path class="cgc693h8m"/><path class="lqwy_ob4l"/><path class="fsl16nhqi"/><path class="b_-pogbrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:fusebox"} {...others} />);
}

export default Component;
