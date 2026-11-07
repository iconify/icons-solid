import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpvo_gb0n.css';
import '../../css/a/akoivubxv.css';
import '../../css/e/eqwsh3bwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wpvo_gb0n"/><path class="akoivubxv"/><path clip-rule="evenodd" class="eqwsh3bwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-left-bold-duotone"} {...others} />);
}

export default Component;
