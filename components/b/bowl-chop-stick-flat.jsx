import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3lssmonf.css';
import '../../css/l/l3l_kbinv.css';
import '../../css/y/yi1p79b1s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a3lssmonf"/><path clip-rule="evenodd" class="l3l_kbinv"/><path clip-rule="evenodd" class="yi1p79b1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bowl-chop-stick-flat"} {...others} />);
}

export default Component;
