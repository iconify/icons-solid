import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptf8xy91h.css';
import '../../css/m/m5ugsmtmc.css';
import '../../css/x/xwycoosoa.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ptf8xy91h"/><path class="m5ugsmtmc"/><circle class="xwycoosoa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:pawn"} {...others} />);
}

export default Component;
