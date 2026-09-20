import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bu19vwcrq.css';
import '../../css/g/g-385-cio.css';
import '../../css/g/gy7ztlgxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bu19vwcrq"/><path class="g-385-cio"/><circle class="gy7ztlgxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:package-search"} {...others} />);
}

export default Component;
