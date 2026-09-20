import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sleag_yqb.css';
import '../../css/i/i-420qk_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sleag_yqb"/><circle class="i-420qk_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:file-search"} {...others} />);
}

export default Component;
