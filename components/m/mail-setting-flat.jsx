import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw6kjunoo.css';
import '../../css/w/w81nml9tu.css';
import '../../css/c/cudx1bbrx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cw6kjunoo"/><path class="w81nml9tu"/><path clip-rule="evenodd" class="cudx1bbrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mail-setting-flat"} {...others} />);
}

export default Component;
