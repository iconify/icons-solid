import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aopzq3bkk.css';
import '../../css/l/lxbo598vq.css';
import '../../css/k/kjbt3bbno.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aopzq3bkk"/><path class="lxbo598vq"/><circle class="kjbt3bbno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:setting-alt-line-duotone-line"} {...others} />);
}

export default Component;
