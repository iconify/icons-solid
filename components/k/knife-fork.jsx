import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lf18mo9uc.css';
import '../../css/z/z03nzwvng.css';
import '../../css/o/o2qtt6bjf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="lf18mo9uc"/><path class="z03nzwvng"/><path class="o2qtt6bjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:knife-fork"} {...others} />);
}

export default Component;
