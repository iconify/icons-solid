import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hrwa0kb0o.css';
import '../../css/y/yp5j36b-n.css';
import '../../css/g/gjbcl_bbd.css';
import '../../css/u/u4nwn9bwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hrwa0kb0o wm-shadow"/><path class="wm-shadow yp5j36b-n"/><path class="gjbcl_bbd"/><path class="u4nwn9bwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:water-balloon"} {...others} />);
}

export default Component;
