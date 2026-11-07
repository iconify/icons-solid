import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahcs-h-rh.css';
import '../../css/f/fzr5emvaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahcs-h-rh"/><path clip-rule="evenodd" class="fzr5emvaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-left-close-outline"} {...others} />);
}

export default Component;
