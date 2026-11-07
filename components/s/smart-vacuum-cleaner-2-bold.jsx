import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0cyhdctz.css';
import '../../css/n/nda3cdcdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k0cyhdctz"/><path clip-rule="evenodd" class="nda3cdcdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-vacuum-cleaner-2-bold"} {...others} />);
}

export default Component;
