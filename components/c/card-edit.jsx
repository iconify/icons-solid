import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zgfbb2z5b.css';
import '../../css/q/quydibcdy.css';
import '../../css/y/y4yzqgbhi.css';
import '../../css/k/kx0jl-bjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zgfbb2z5b"/><path class="quydibcdy"/><path class="y4yzqgbhi"/><path class="kx0jl-bjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-edit"} {...others} />);
}

export default Component;
