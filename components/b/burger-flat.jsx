import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ts3dlmbar.css';
import '../../css/c/c47s9zbnd.css';
import '../../css/t/tgzn-ds1s.css';
import '../../css/b/bwg0uobks.css';
import '../../css/t/td8-2hbic.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ts3dlmbar"/><path clip-rule="evenodd" class="c47s9zbnd"/><path class="tgzn-ds1s"/><path class="bwg0uobks"/><path clip-rule="evenodd" class="td8-2hbic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:burger-flat"} {...others} />);
}

export default Component;
