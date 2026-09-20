import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3sh27b1i.css';
import '../../css/w/wln7gbc4q.css';
import '../../css/b/bk_8nxb5u.css';
import '../../css/i/iswi7r7vs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z3sh27b1i"/><path class="wln7gbc4q"/><path class="bk_8nxb5u"/><path class="iswi7r7vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:css3"} {...others} />);
}

export default Component;
