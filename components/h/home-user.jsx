import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qq9ymcb2g.css';
import '../../css/a/aq19pqh_t.css';
import '../../css/f/fgetbabxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qq9ymcb2g"/><path clip-rule="evenodd" class="aq19pqh_t"/><path clip-rule="evenodd" class="fgetbabxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:home-user"} {...others} />);
}

export default Component;
