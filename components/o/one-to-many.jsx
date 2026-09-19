import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jy1imkqad.css';
import '../../css/v/vy68oqfbo.css';
import '../../css/k/ku4pobser.css';
import '../../css/y/ybwsvbboz.css';
import '../../css/l/l40qc0btw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="jy1imkqad"/><path class="vy68oqfbo"/><path class="ku4pobser"/><path class="ybwsvbboz"/><path class="l40qc0btw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:one-to-many"} {...others} />);
}

export default Component;
