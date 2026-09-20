import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/j/j697l3uzc.css';
import '../../css/d/dku0a-b1a.css';
import '../../css/l/l_x32y_6i.css';
import '../../css/i/i7mhpwj8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="j697l3uzc"/><path class="dku0a-b1a"/><path class="l_x32y_6i"/><path class="i7mhpwj8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:studen-circle-network-logo"} {...others} />);
}

export default Component;
