import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zy7t_f0cs.css';
import '../../css/s/s6tjy5z4a.css';
import '../../css/c/cb81sebqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="zy7t_f0cs"/><path clip-rule="evenodd" class="s6tjy5z4a"/><path class="cb81sebqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-ads-logo"} {...others} />);
}

export default Component;
