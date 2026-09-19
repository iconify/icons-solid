import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lf18mo9uc.css';
import '../../css/j/jyq7u8b0e.css';
import '../../css/o/o2qtt6bjf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="lf18mo9uc"/><path class="jyq7u8b0e"/><path class="o2qtt6bjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:knife-fork"} {...others} />);
}

export default Component;
