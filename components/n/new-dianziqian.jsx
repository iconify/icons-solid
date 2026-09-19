import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/msi73-bbv.css';
import '../../css/h/h7qzhgb-s.css';
import '../../css/q/q483q5b_a.css';
import '../../css/v/vabl43e7u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="msi73-bbv"/><path class="h7qzhgb-s"/><path class="q483q5b_a"/><path class="vabl43e7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:new-dianziqian"} {...others} />);
}

export default Component;
