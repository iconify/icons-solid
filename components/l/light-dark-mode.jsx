import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/r83zywbch.css';
import '../../css/f/fwajnvbhj.css';
import '../../css/p/p7x1z2brk.css';
import '../../css/a/ajbx9ybtw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="r83zywbch"/><path class="fwajnvbhj"/><path class="p7x1z2brk"/><path class="ajbx9ybtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:light-dark-mode"} {...others} />);
}

export default Component;
