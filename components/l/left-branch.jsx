import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwgv0sqsx.css';
import '../../css/a/awp_-7bqo.css';
import '../../css/r/r-od25brh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jwgv0sqsx"/><circle transform="matrix(-1 0 0 1 40 24)" class="awp_-7bqo"/><path class="r-od25brh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:left-branch"} {...others} />);
}

export default Component;
