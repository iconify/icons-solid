import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qdu6pkbyd.css';
import '../../css/x/xmeengbql.css';
import '../../css/b/be5lokz9e.css';
import '../../css/o/o830uduci.css';
import '../../css/p/p344f6b7m.css';
import '../../css/x/xwq6lnbal.css';
import '../../css/e/e-xzv0bzs.css';
import '../../css/l/lob3o0b4h.css';
import '../../css/i/iep7m4ccm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="qdu6pkbyd"/><path class="xmeengbql"/><path class="be5lokz9e"/><path class="o830uduci"/><circle class="p344f6b7m"/><path class="xwq6lnbal"/><path class="e-xzv0bzs"/><path class="lob3o0b4h"/><path class="iep7m4ccm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:air-bike"} {...others} />);
}

export default Component;
