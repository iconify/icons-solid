import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uhtqi2bld.css';
import '../../css/z/zfck3lhqy.css';
import '../../css/y/yedi71t4u.css';
import '../../css/o/ovtvrgkrb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="uhtqi2bld"/><circle class="zfck3lhqy"/><circle class="yedi71t4u"/><path class="ovtvrgkrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:every-user"} {...others} />);
}

export default Component;
