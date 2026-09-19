import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxlrlbb7p.css';
import '../../css/m/mimikibxd.css';
import '../../css/k/ka6u0hb4m.css';
import '../../css/r/r6gddzb1i.css';
import '../../css/z/zou2u1bir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vxlrlbb7p"/><path class="mimikibxd"/><circle class="ka6u0hb4m"/><circle class="r6gddzb1i"/><circle class="zou2u1bir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-armor"} {...others} />);
}

export default Component;
