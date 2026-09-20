import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wso6qqzcb.css';
import '../../css/u/u9-cdnbkn.css';
import '../../css/e/e3fjlzrkz.css';
import '../../css/r/r3vrbgbgv.css';
import '../../css/e/e7nts4gnf.css';
import '../../css/y/ylcvhwbrw.css';
import '../../css/q/qxlid6bxk.css';
import '../../css/r/ro9rytf_i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wso6qqzcb"/><path class="u9-cdnbkn"/><path class="e3fjlzrkz"/><path class="r3vrbgbgv"/><circle class="e7nts4gnf"/><circle class="ylcvhwbrw"/><path class="qxlid6bxk"/><path class="ro9rytf_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:chicken"} {...others} />);
}

export default Component;
