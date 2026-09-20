import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0fjx8q_o.css';
import '../../css/f/f29ft8bcr.css';
import '../../css/f/fx974_bqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a0fjx8q_o"/><path class="f29ft8bcr"/><path class="fx974_bqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-3d"} {...others} />);
}

export default Component;
