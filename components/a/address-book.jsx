import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/d_5892kyf.css';
import '../../css/f/fiuqsdh8w.css';
import '../../css/m/m5v1zocsx.css';
import '../../css/k/kawiqrbje.css';
import '../../css/p/p7po1bbaf.css';
import '../../css/o/o8f8hsbum.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="d_5892kyf"/><path class="fiuqsdh8w"/><path class="m5v1zocsx"/><path class="kawiqrbje"/><circle class="p7po1bbaf"/><path class="o8f8hsbum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:address-book"} {...others} />);
}

export default Component;
