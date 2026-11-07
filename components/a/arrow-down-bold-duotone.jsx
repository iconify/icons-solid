import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz_lgvb5c.css';
import '../../css/a/adl-4zb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pz_lgvb5c"/><path class="adl-4zb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-down-bold-duotone"} {...others} />);
}

export default Component;
