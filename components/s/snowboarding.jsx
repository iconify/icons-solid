import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfy3eubrn.css';
import '../../css/h/hoeze_b0l.css';

const viewBox = {"width":50,"height":50};
const content = `<ellipse class="hfy3eubrn"/><path class="hoeze_b0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:snowboarding"} {...others} />);
}

export default Component;
