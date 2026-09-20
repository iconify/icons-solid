import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdb1ljz-d.css';
import '../../css/g/gr5tarbnp.css';
import '../../css/f/fc2727bbj.css';
import '../../css/n/nzez-bbwd.css';
import '../../css/z/zhhuv8auz.css';
import '../../css/y/yjh5g2mgd.css';
import '../../css/i/ic19m86kz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xdb1ljz-d"/><path class="gr5tarbnp"/><path class="fc2727bbj"/><path class="nzez-bbwd"/><path class="zhhuv8auz"/><path class="yjh5g2mgd"/><path class="ic19m86kz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:led"} {...others} />);
}

export default Component;
