import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnkhkh.css';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/v/vlmmxw.css';
import '../../css/a/ab0nvj.css';
import '../../css/v/vxmw1k.css';
import '../../css/z/zswq1o.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-64.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lnkhkh"/><path class="qa-o7h taf2xz vlmmxw"/><path class="ab0nvj qa-o7h"/><path class="qa-o7h taf2xz vxmw1k"/><path class="qa-o7h taf2xz zswq1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:document-list-twotone"} {...others} />);
}

export default Component;
