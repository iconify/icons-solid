import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp-vsxb4f.css';
import '../../css/w/ws9x54gvl.css';
import '../../css/v/vm_hfeb5b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bp-vsxb4f"/><path class="ws9x54gvl"/><path class="vm_hfeb5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rhel-light"} {...others} />);
}

export default Component;
