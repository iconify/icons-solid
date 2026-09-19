import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dgrw-kg1f.css';
import '../../css/n/n8-s9xncy.css';
import '../../css/z/zbclgg51g.css';
import '../../css/q/qay7yab0m.css';
import '../../css/h/hypwe_bgq.css';
import '../../css/p/phwfinowp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="dgrw-kg1f"/><circle class="n8-s9xncy"/><circle class="zbclgg51g"/><circle class="qay7yab0m"/><circle class="hypwe_bgq"/><circle class="phwfinowp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:grab-horizontal"} {...others} />);
}

export default Component;
