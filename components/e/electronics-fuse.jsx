import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wogrm8bbk.css';
import '../../css/n/ng8bi6u2k.css';
import '../../css/o/o045svb-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wogrm8bbk"/><path class="ng8bi6u2k"/><path class="o045svb-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:electronics-fuse"} {...others} />);
}

export default Component;
