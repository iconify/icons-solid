import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/yq0agmbxn.css';
import '../../css/q/qmr6impwm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGE9tJNcsq"><g class="s9cl3zbei"><path class="yq0agmbxn"/><path class="qmr6impwm"/></g></mask></defs><path mask="url(#SVGE9tJNcsq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:avocado"} {...others} />);
}

export default Component;
