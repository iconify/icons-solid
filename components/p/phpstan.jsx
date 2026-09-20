import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/go9aaybid.css';
import '../../css/c/cjlnn9bwu.css';
import '../../css/j/jxcan4bkk.css';
import '../../css/v/vzg1iz6vp.css';
import '../../css/v/vh45_qint.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="go9aaybid"/><path class="cjlnn9bwu"/><path class="jxcan4bkk"/><path class="vzg1iz6vp"/><path class="vh45_qint"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:phpstan"} {...others} />);
}

export default Component;
