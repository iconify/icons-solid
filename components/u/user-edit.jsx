import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g7yf92x6w.css';
import '../../css/u/up0w2tbhi.css';
import '../../css/m/mqe2c4b7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g7yf92x6w"/><path class="up0w2tbhi"/><path clip-rule="evenodd" class="mqe2c4b7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-edit"} {...others} />);
}

export default Component;
