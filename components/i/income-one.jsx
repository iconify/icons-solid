import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/z_lk13bab.css';
import '../../css/b/bcbfgeb1t.css';
import '../../css/w/wfqye0b5u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="z_lk13bab"/><path class="bcbfgeb1t"/><path class="wfqye0b5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:income-one"} {...others} />);
}

export default Component;
