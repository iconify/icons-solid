import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbgvppbqc.css';
import '../../css/w/w1c22wekr.css';
import '../../css/l/l8y7zreew.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="bbgvppbqc"/><path class="w1c22wekr"/><path class="l8y7zreew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:share-apple"} {...others} />);
}

export default Component;
