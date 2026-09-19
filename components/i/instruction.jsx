import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/x/xkue7kb9l.css';
import '../../css/c/cofazqb2f.css';
import '../../css/d/db-9zy_vl.css';
import '../../css/e/e42-6mb8q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEgcuvcab"><g class="hv130ab-t"><rect class="xkue7kb9l"/><path class="cofazqb2f"/><path class="db-9zy_vl"/><path class="e42-6mb8q"/></g></mask></defs><path mask="url(#SVGEgcuvcab)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:instruction"} {...others} />);
}

export default Component;
