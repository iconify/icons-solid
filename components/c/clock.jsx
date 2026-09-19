import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm_fzdbbs.css';
import '../../css/g/gzm0_xb-h.css';
import '../../css/e/ev2wzjerc.css';
import '../../css/q/qa0kplb8m.css';
import '../../css/b/bwdpl5zyw.css';
import '../../css/u/u3apw6wjb.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="xm_fzdbbs"/><circle class="gzm0_xb-h"/><path class="ev2wzjerc"/><path class="qa0kplb8m"/><circle class="bwdpl5zyw"/><circle class="u3apw6wjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:clock"} {...others} />);
}

export default Component;
