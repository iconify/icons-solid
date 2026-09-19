import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ews_agbzg.css';
import '../../css/q/q869ue7ux.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ews_agbzg"/><path clip-rule="evenodd" class="q869ue7ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:stethoscope-outline"} {...others} />);
}

export default Component;
