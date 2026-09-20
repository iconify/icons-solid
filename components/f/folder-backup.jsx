import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spajzybyt.css';
import '../../css/e/ev7zm84ma.css';
import '../../css/z/ze5omzbef.css';
import '../../css/c/c23j0pb_c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="spajzybyt"/><g class="ev7zm84ma"><path class="ze5omzbef"/><path class="c23j0pb_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-backup"} {...others} />);
}

export default Component;
