import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sjzkojb-g.css';
import '../../css/f/f-k3qpbta.css';
import '../../css/p/pdz-opbzt.css';
import '../../css/c/c7qt2jbgj.css';
import '../../css/n/nm-wo1b9a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSnb62wtP"><g class="ft5dv1b6b"><path class="sjzkojb-g"/><path class="f-k3qpbta"/><rect class="pdz-opbzt"/><path class="c7qt2jbgj"/><path class="nm-wo1b9a"/></g></mask></defs><path mask="url(#SVGSnb62wtP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:locking-picture"} {...others} />);
}

export default Component;
