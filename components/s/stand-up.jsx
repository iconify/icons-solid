import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/axkk8gb6r.css';
import '../../css/m/m19n9hzdc.css';
import '../../css/u/u-3hf7brm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="axkk8gb6r"/><path class="m19n9hzdc"/><circle class="u-3hf7brm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:stand-up"} {...others} />);
}

export default Component;
