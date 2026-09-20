import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es6gsb.css';
import '../../css/m/mx963o.css';
import '../../css/y/ydovum.css';
import '../../css/b/bvcbdi.css';
import '../../css/u/u5kw3r.css';
import '../../css/g/gl0rpz.css';
import '../../css/v/v88fpx.css';
import '../../css/q/q0e96w.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fade-to-0.css';
import '../../css/t/tr-2c6-rw.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-xnu3zq.css';
import '../../css/d/d-4jha9r.css';
import '../../css/d/d-c-j2zw.css';
import '../../css/d/d-wr6sul.css';
import '../../css/d/d-248j2i.css';
import '../../css/d/d-voy_sq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="es6gsb"/><path class="mx963o ydovum"/><path class="bvcbdi ydovum"/><path class="u5kw3r ydovum"/><path class="gl0rpz ydovum"/><path class="v88fpx ydovum"/><path class="q0e96w ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cog-filled-loop"} {...others} />);
}

export default Component;
