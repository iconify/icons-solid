import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ukcohknxc.css';
import '../../css/v/vydhux3pd.css';
import '../../css/f/f0xblvrjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ukcohknxc"/><path class="vydhux3pd"/><path class="f0xblvrjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:text-format-dottted-underline"} {...others} />);
}

export default Component;
