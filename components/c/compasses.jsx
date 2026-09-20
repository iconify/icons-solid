import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5lxtc8oq.css';
import '../../css/k/k6jhfewox.css';
import '../../css/l/l130qq87f.css';
import '../../css/z/z81lmby2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d5lxtc8oq"/><path class="k6jhfewox"/><path class="l130qq87f"/><path class="z81lmby2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:compasses"} {...others} />);
}

export default Component;
