import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dgeqk47rg.css';
import '../../css/i/iyn9fmbzw.css';
import '../../css/x/xkg6e8cwd.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dgeqk47rg"/><path class="iyn9fmbzw"/><path class="xkg6e8cwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:lv"} {...others} />);
}

export default Component;
