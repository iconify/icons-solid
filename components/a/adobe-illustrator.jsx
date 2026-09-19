import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hhu7stb1d.css';
import '../../css/u/u9u7r87uf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hhu7stb1d"/><path class="u9u7r87uf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:adobe-illustrator"} {...others} />);
}

export default Component;
