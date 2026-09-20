import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/q/q6j_fmbzy.css';
import '../../css/b/bh3vf9b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="q6j_fmbzy"/><path class="bh3vf9b0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:microsoft-onedrive-logo-2"} {...others} />);
}

export default Component;
