import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/e/ebdsdwxiu.css';
import '../../css/g/g05owg7bi.css';
import '../../css/m/mldr_ccaf.css';
import '../../css/v/v20a3bqdv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ebdsdwxiu"/><path class="g05owg7bi"/><circle class="mldr_ccaf"/><circle class="v20a3bqdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:riding"} {...others} />);
}

export default Component;
