import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tmz70m34b.css';
import '../../css/n/n_chcwnjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tmz70m34b"/><path class="n_chcwnjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:phone-retro-1"} {...others} />);
}

export default Component;
