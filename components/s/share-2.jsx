import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xur5ogb9u.css';
import '../../css/q/qdhcsf0ay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xur5ogb9u"/><path class="qdhcsf0ay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:share-2"} {...others} />);
}

export default Component;
