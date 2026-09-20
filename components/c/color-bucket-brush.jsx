import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iuftoqjtm.css';
import '../../css/f/fv3eeub9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iuftoqjtm"/><path class="fv3eeub9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:color-bucket-brush"} {...others} />);
}

export default Component;
