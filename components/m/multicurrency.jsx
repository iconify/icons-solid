import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgpb1ku2d.css';
import '../../css/t/ttawbeb1z.css';
import '../../css/w/wn6av3biq.css';
import '../../css/r/r4qk41bxa.css';
import '../../css/a/azker1yhy.css';
import '../../css/f/fhboxqufu.css';
import '../../css/e/eqilswvsg.css';
import '../../css/g/gjuj7tnsm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fgpb1ku2d"/><path class="ttawbeb1z"/><path class="wn6av3biq"/><path class="r4qk41bxa"/><path class="azker1yhy"/><path class="fhboxqufu"/><path class="eqilswvsg"/><path class="gjuj7tnsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:multicurrency"} {...others} />);
}

export default Component;
