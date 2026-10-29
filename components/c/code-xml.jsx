import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jr9q76bwp.css';
import '../../css/d/djul47m5n.css';
import '../../css/z/zb-5b1buw.css';
import '../../css/z/zlgvcq_bb.css';
import '../../css/u/uuk_cbowa.css';
import '../../css/g/gh_gy50oy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jr9q76bwp wm-k"/><path class="djul47m5n wm-k"/><path class="wm-k zb-5b1buw"/><path class="wm-a zlgvcq_bb"/><path class="uuk_cbowa wm-a"/><path class="gh_gy50oy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:code-xml"} {...others} />);
}

export default Component;
