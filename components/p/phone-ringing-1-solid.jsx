import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0z6webeg.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="k0z6webeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:phone-ringing-1-solid"} {...others} />);
}

export default Component;
