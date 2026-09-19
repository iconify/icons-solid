import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/voi1sjrpa.css';
import '../../css/e/ea8b02bvq.css';
import '../../css/x/x0rn_nios.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect class="voi1sjrpa"/><path class="ea8b02bvq"/><path class="x0rn_nios"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:boiler"} {...others} />);
}

export default Component;
