import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/j/jq5ciubjk.css';
import '../../css/y/ya5544uqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p9-zrkb4g"/><path class="jq5ciubjk"/><path class="ya5544uqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:compass-1"} {...others} />);
}

export default Component;
