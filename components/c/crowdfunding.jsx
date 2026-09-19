import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k45hr2bcn.css';
import '../../css/s/swsab_86e.css';
import '../../css/o/o1u583b9p.css';
import '../../css/q/qtxsezbbm.css';
import '../../css/w/wp5xjpmnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="k45hr2bcn"/><circle class="swsab_86e"/><circle class="o1u583b9p"/><circle class="qtxsezbbm"/><path class="wp5xjpmnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:crowdfunding"} {...others} />);
}

export default Component;
