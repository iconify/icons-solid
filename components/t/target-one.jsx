import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4kwwhuwm.css';
import '../../css/m/mp9sosb_j.css';
import '../../css/t/teg8owbia.css';
import '../../css/b/b6rf6jbve.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="s4kwwhuwm"/><path class="mp9sosb_j"/><path class="teg8owbia"/><path class="b6rf6jbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:target-one"} {...others} />);
}

export default Component;
