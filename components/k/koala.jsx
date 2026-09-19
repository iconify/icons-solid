import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b96b_ml4z.css';
import '../../css/a/azh576bmh.css';
import '../../css/u/uh9ns4c8e.css';
import '../../css/q/qfo65ccwf.css';
import '../../css/y/yyvruackh.css';
import '../../css/v/vhdngfb7g.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="b96b_ml4z"/><path class="azh576bmh"/><path class="uh9ns4c8e"/><path class="qfo65ccwf"/><path class="yyvruackh"/><path class="vhdngfb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:koala"} {...others} />);
}

export default Component;
