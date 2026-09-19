import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i1gnly--z.css';
import '../../css/o/olnkf1ltv.css';
import '../../css/d/djovwac8v.css';
import '../../css/f/f66-7qizp.css';
import '../../css/k/ktnx8ub9f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="i1gnly--z"/><path class="olnkf1ltv"/><circle class="djovwac8v"/><circle class="f66-7qizp"/><circle class="ktnx8ub9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:pear"} {...others} />);
}

export default Component;
