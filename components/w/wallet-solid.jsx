import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-atscb1d.css';
import '../../css/f/flmcfydke.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g-atscb1d"/><path class="flmcfydke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:wallet-solid"} {...others} />);
}

export default Component;
