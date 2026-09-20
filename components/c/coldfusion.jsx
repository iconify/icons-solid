import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rew-o_dyy.css';
import '../../css/u/ubz5-631s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rew-o_dyy"/><path class="ubz5-631s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:coldfusion"} {...others} />);
}

export default Component;
