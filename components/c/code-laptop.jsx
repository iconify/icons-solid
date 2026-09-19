import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/v9mldkbxw.css';
import '../../css/n/ndtovtbdh.css';
import '../../css/b/b997g1uyo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="v9mldkbxw"/><path class="ndtovtbdh"/><path class="b997g1uyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:code-laptop"} {...others} />);
}

export default Component;
