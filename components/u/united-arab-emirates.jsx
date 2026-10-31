import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se6y1yzlf.css';
import '../../css/e/efjm0sm3v.css';
import '../../css/y/yat6ahbpa.css';
import '../../css/f/f2544_n4i.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="se6y1yzlf"/><path class="efjm0sm3v"/><path class="yat6ahbpa"/><path class="f2544_n4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:united-arab-emirates"} {...others} />);
}

export default Component;
