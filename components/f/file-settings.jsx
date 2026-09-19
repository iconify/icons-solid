import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fqwagjb6j.css';
import '../../css/o/orjx92biv.css';
import '../../css/m/m1mo2dbtk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="fqwagjb6j"/><circle class="orjx92biv"/><path class="m1mo2dbtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-settings"} {...others} />);
}

export default Component;
