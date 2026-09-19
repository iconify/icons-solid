import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cs3i02bfn.css';
import '../../css/f/fr-2ovb-v.css';
import '../../css/c/cdqasfbix.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="cs3i02bfn"/><path class="fr-2ovb-v"/><circle class="cdqasfbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-event-endpoint-mgmt"} {...others} />);
}

export default Component;
