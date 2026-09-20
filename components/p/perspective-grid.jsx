import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hmle4qehd.css';
import '../../css/s/sdqlbxbcw.css';
import '../../css/z/zfhw3cbas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hmle4qehd"/><path class="sdqlbxbcw"/><path class="zfhw3cbas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:perspective-grid"} {...others} />);
}

export default Component;
