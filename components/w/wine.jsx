import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ehih-0bcs.css';
import '../../css/e/eghp0hy0p.css';
import '../../css/s/sagf9na8p.css';
import '../../css/i/i_aizmszx.css';
import '../../css/l/lpe7-_bfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ehih-0bcs wm-shadow"/><path class="eghp0hy0p wm-shadow"/><path class="sagf9na8p"/><path class="i_aizmszx"/><path class="lpe7-_bfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wine"} {...others} />);
}

export default Component;
