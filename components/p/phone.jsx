import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qctwulbfr.css';
import '../../css/a/antt1e1xu.css';
import '../../css/o/ox3rhu33h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGX9FZtb2j"><g class="s9cl3zbei"><path class="qctwulbfr"/><path class="antt1e1xu"/><path class="ox3rhu33h"/></g></mask></defs><path mask="url(#SVGX9FZtb2j)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:phone"} {...others} />);
}

export default Component;
