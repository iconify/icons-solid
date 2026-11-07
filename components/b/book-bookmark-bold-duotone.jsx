import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qheceeb1h.css';
import '../../css/s/sy4soacjr.css';
import '../../css/q/qqtleebkg.css';
import '../../css/n/n-o51-mex.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qheceeb1h"/><path class="sy4soacjr"/><path class="qqtleebkg"/><path class="n-o51-mex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-bookmark-bold-duotone"} {...others} />);
}

export default Component;
