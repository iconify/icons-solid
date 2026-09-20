import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g9d6jwa0i.css';
import '../../css/f/fdugjdbia.css';
import '../../css/b/bmzls2byk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g9d6jwa0i"/><path class="fdugjdbia"/><path class="bmzls2byk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shop-like"} {...others} />);
}

export default Component;
