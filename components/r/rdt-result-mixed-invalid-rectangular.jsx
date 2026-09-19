import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mfxtvpb4z.css';
import '../../css/z/ztb_4wb8u.css';
import '../../css/r/rv-qagb6s.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mfxtvpb4z"/><path class="ztb_4wb8u"/><path class="rv-qagb6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-mixed-invalid-rectangular"} {...others} />);
}

export default Component;
