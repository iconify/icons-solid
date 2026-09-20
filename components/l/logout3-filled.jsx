import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1j20kexv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l1j20kexv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:logout3-filled"} {...others} />);
}

export default Component;
