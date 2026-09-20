import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d9hh3_5nb.css';
import '../../css/m/mvn6bybtl.css';
import '../../css/r/rb_6zxbcl.css';
import '../../css/u/uped8l_dw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d9hh3_5nb"/><path class="mvn6bybtl"/><path clip-rule="evenodd" class="rb_6zxbcl"/><path class="uped8l_dw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-search-duotone"} {...others} />);
}

export default Component;
