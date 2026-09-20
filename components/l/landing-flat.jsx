import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x7yi7dmxv.css';
import '../../css/l/lft8ovbpe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="x7yi7dmxv"/><path class="lft8ovbpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:landing-flat"} {...others} />);
}

export default Component;
