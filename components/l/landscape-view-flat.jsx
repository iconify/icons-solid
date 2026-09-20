import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4qqlvsfp.css';
import '../../css/i/i2djolb3a.css';
import '../../css/k/kt46szbuc.css';
import '../../css/c/cbam21neb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="v4qqlvsfp"/><path class="i2djolb3a"/><path class="kt46szbuc"/><path class="cbam21neb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:landscape-view-flat"} {...others} />);
}

export default Component;
