import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gy-sn5z6u.css';
import '../../css/x/x34xdbs7v.css';
import '../../css/d/dmrsmx4ou.css';
import '../../css/w/wjx2g5uen.css';
import '../../css/s/sbqcb0b4j.css';
import '../../css/h/hn-31obit.css';
import '../../css/u/ujtg62baq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvI7bCFbS"><g class="ft5dv1b6b"><path class="gy-sn5z6u"/><path class="x34xdbs7v"/><path class="dmrsmx4ou"/><path class="wjx2g5uen"/><path class="sbqcb0b4j"/><path class="hn-31obit"/><path class="ujtg62baq"/></g></mask></defs><path mask="url(#SVGvI7bCFbS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:gold-medal-two"} {...others} />);
}

export default Component;
