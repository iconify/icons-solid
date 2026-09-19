import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y-tgb7atf.css';
import '../../css/x/xs_8tnxsv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="y-tgb7atf"/><path class="xs_8tnxsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:leaves-two"} {...others} />);
}

export default Component;
