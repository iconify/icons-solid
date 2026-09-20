import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zmhb63boe.css';
import '../../css/p/ppst9q7nc.css';
import '../../css/o/o-fzbmoae.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zmhb63boe"/><path class="ppst9q7nc"/><path class="o-fzbmoae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cao-dai-flat"} {...others} />);
}

export default Component;
