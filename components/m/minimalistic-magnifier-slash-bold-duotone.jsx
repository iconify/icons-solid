import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl66i7bqg.css';
import '../../css/c/c903nt__c.css';
import '../../css/t/tawopabjo.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="cl66i7bqg"/><path class="c903nt__c"/><path class="tawopabjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifier-slash-bold-duotone"} {...others} />);
}

export default Component;
