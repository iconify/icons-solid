import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hegyw304a.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="hegyw304a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ai-generate-voice-robot-2-solid"} {...others} />);
}

export default Component;
