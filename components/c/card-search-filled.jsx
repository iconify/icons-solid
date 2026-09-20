import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rb_6zxbcl.css';
import '../../css/u/u2gjaigap.css';
import '../../css/m/mvn6bybtl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rb_6zxbcl"/><path class="u2gjaigap"/><path class="mvn6bybtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-search-filled"} {...others} />);
}

export default Component;
