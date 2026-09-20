import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un3jorbwb.css';
import '../../css/c/c3h8n4bmg.css';
import '../../css/o/oc50jw6ki.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="un3jorbwb"/><path class="c3h8n4bmg"/><path clip-rule="evenodd" class="oc50jw6ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:email-attachment-document-solid"} {...others} />);
}

export default Component;
