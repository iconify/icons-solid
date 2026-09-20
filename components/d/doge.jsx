import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aepzuabco.css';
import '../../css/g/gqgo7nzta.css';
import '../../css/v/vv-f_hbum.css';
import '../../css/k/knae6-b4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aepzuabco"/><path class="gqgo7nzta"/><path class="vv-f_hbum"/><path class="knae6-b4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:doge"} {...others} />);
}

export default Component;
