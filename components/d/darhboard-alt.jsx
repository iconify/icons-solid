import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kfnyagb3r.css';
import '../../css/m/mhh30ybth.css';
import '../../css/d/d_6p_3cql.css';
import '../../css/o/oevciebap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><rect class="kfnyagb3r"/><rect class="mhh30ybth"/><rect class="d_6p_3cql"/><rect class="oevciebap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:darhboard-alt"} {...others} />);
}

export default Component;
