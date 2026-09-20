import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xbaygnbuy.css';
import '../../css/w/whw1lhd-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="xbaygnbuy"/><path class="whw1lhd-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:affinity-logo"} {...others} />);
}

export default Component;
