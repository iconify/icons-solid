import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdsgiib1a.css';
import '../../css/g/gmzuw1e_j.css';
import '../../css/c/cha8n8h4w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sdsgiib1a"/><path class="gmzuw1e_j"/><path class="cha8n8h4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suitcase-outline"} {...others} />);
}

export default Component;
