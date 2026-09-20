import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sj9ov6bfp.css';
import '../../css/a/ac6zzfbep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sj9ov6bfp"/><path class="ac6zzfbep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cloud-data-transfer"} {...others} />);
}

export default Component;
