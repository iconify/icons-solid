import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pro02ebyg.css';
import '../../css/g/gadrfdczx.css';
import '../../css/z/zhcvwwl-j.css';
import '../../css/n/n1cqsebny.css';
import '../../css/f/fc19txi6c.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGG01kFduh" class="pro02ebyg"/></defs><path class="gadrfdczx"/><g transform="matrix(.9826 0 0 .9823 .266 1.018)" class="zhcvwwl-j"><path class="n1cqsebny"/><use href="#SVGG01kFduh"/><path class="fc19txi6c"/><use href="#SVGG01kFduh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:left-facing-fist-dark-skin-tone"} {...others} />);
}

export default Component;
