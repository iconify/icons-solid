import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfig_ccgd.css';
import '../../css/g/gywkiybpr.css';
import '../../css/n/ncqivtbyh.css';

const viewBox = {"width":3200,"height":3200};
const content = `<path class="gfig_ccgd"/><path class="gywkiybpr"/><path class="ncqivtbyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-seeders-open"} {...others} />);
}

export default Component;
