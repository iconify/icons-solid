import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/y/y7yylybwp.css';
import '../../css/k/k4l731bte.css';
import '../../css/t/typd81uhy.css';
import '../../css/b/bxo7hgbnc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="y7yylybwp"/><path class="k4l731bte"/><path class="typd81uhy"/><path class="bxo7hgbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ai-edit-robot"} {...others} />);
}

export default Component;
