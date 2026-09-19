import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/n2u8ozbbq.css';
import '../../css/y/y-qb6bbqh.css';
import '../../css/m/mybdgyglo.css';
import '../../css/t/t1x3gbbjf.css';
import '../../css/x/x46ygabcy.css';
import '../../css/c/csyqkzb7q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7kbh8Kfq"><g class="rohhhzb0l"><rect class="n2u8ozbbq"/><path class="y-qb6bbqh"/><circle class="mybdgyglo"/><circle class="t1x3gbbjf"/><rect class="x46ygabcy"/><path class="csyqkzb7q"/></g></mask></defs><path mask="url(#SVG7kbh8Kfq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:robot"} {...others} />);
}

export default Component;
