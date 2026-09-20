import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/m/mj2k7xbue.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6jhhjidb.css';
import '../../css/g/gwhp-bc-r.css';
import '../../css/s/ssbjp9b9f.css';
import '../../css/o/o8j0ktb4f.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGROzR8cwK" class="n1mjunbsu"><path class="mj2k7xbue"/></mask><g class="ft5dv1b6b"><path clip-rule="evenodd" class="d6jhhjidb"/><path mask="url(#SVGROzR8cwK)" class="gwhp-bc-r"/><circle class="ssbjp9b9f"/><path class="o8j0ktb4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-load-box-fill"} {...others} />);
}

export default Component;
