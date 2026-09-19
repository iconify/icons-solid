import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z82u_nr1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z82u_nr1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:gear-outline"} {...others} />);
}

export default Component;
