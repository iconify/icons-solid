import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/msz60p3bx.css';
import '../../css/m/mp63jovjl.css';
import '../../css/k/kgmv5bb8g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><circle class="msz60p3bx"/><circle class="mp63jovjl"/><path class="kgmv5bb8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gauze"} {...others} />);
}

export default Component;
