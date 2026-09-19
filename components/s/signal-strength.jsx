import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kg1w76bky.css';
import '../../css/g/g7hc3h9gh.css';
import '../../css/x/xa06vonbj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kg1w76bky"/><path class="g7hc3h9gh"/><path class="xa06vonbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:signal-strength"} {...others} />);
}

export default Component;
