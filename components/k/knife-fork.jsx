import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jsi4-x54p.css';
import '../../css/u/uuom5_cln.css';
import '../../css/c/c2tv8zixz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGE2vEFdAT"><g class="ft5dv1b6b"><path class="jsi4-x54p"/><path class="uuom5_cln"/><path class="c2tv8zixz"/></g></mask></defs><path mask="url(#SVGE2vEFdAT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:knife-fork"} {...others} />);
}

export default Component;
