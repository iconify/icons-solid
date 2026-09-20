import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yxz5rlbix.css';
import '../../css/b/b2wq-2kdm.css';
import '../../css/e/eetq4kbnf.css';
import '../../css/l/l-mb-_b9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yxz5rlbix"/><path class="b2wq-2kdm"/><path class="eetq4kbnf"/><path class="l-mb-_b9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-music-linear"} {...others} />);
}

export default Component;
