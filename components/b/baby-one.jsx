import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/j/jao2s0bkg.css';
import '../../css/w/wjfqwrh9b.css';
import '../../css/n/ndf_41n2w.css';
import '../../css/h/hyd3-wrrp.css';
import '../../css/b/btb6fpb3v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><circle class="jao2s0bkg"/><path class="wjfqwrh9b"/><path class="ndf_41n2w"/><path class="hyd3-wrrp"/><path class="btb6fpb3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baby-one"} {...others} />);
}

export default Component;
