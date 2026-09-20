import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vz92u5bpe.css';
import '../../css/p/p_ydofvqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vz92u5bpe"/><path class="p_ydofvqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:movies-reel"} {...others} />);
}

export default Component;
