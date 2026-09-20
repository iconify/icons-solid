import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l22vhgqoj.css';
import '../../css/e/e-qjq1e3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="l22vhgqoj"/><path class="e-qjq1e3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-logo"} {...others} />);
}

export default Component;
