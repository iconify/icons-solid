import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fsade8bxv.css';
import '../../css/f/f6rz0s9bl.css';
import '../../css/z/z571ntbme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fsade8bxv"/><path class="f6rz0s9bl"/><circle class="z571ntbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pen-sparkle"} {...others} />);
}

export default Component;
