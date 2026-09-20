import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pt72orbxr.css';
import '../../css/y/y6z1gibnd.css';

const viewBox = {"width":141,"height":30};
const content = `<g class="bi12bsetm"><path class="pt72orbxr"/><path class="y6z1gibnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:yandex-taxi"} {...others} />);
}

export default Component;
