import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udl05cesy.css';
import '../../css/r/r2agu4stc.css';
import '../../css/d/dmah2_beo.css';
import '../../css/f/fprc9_bni.css';
import '../../css/v/vthft9fin.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="udl05cesy"/><path class="r2agu4stc"/><path class="dmah2_beo"/><path class="fprc9_bni"/><path class="vthft9fin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-rainy"} {...others} />);
}

export default Component;
