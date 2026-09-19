import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/g/gpbfd-bbj.css';
import '../../css/e/et2uj9bnt.css';
import '../../css/r/ri3nj3b6p.css';
import '../../css/j/jvhbe20pu.css';
import '../../css/y/yxj0elbnj.css';
import '../../css/n/ny61cl8ay.css';
import '../../css/o/o7dui1b0p.css';
import '../../css/p/pm_hpqc4n.css';
import '../../css/q/qqnmefbyb.css';
import '../../css/u/u-6v-bbgi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="gpbfd-bbj"/><circle class="et2uj9bnt"/><path class="ri3nj3b6p"/><path class="jvhbe20pu"/><path class="yxj0elbnj"/><path class="ny61cl8ay"/><path class="o7dui1b0p"/><path class="pm_hpqc4n"/><path class="qqnmefbyb"/><path class="u-6v-bbgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder-settings-one"} {...others} />);
}

export default Component;
