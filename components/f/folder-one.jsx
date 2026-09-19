import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjbqe5tiw.css';
import '../../css/r/rk-rw9bqk.css';
import '../../css/a/a7-m_liew.css';
import '../../css/k/k1d0jkbam.css';
import '../../css/u/uiyiq56du.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fjbqe5tiw"/><circle class="rk-rw9bqk"/><path class="a7-m_liew"/><circle class="k1d0jkbam"/><path class="uiyiq56du"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:folder-one"} {...others} />);
}

export default Component;
