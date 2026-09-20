import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/an5gq2bey.css';
import '../../css/j/jy91cz49o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="an5gq2bey"/><path class="jy91cz49o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:undertake-delivery-filled"} {...others} />);
}

export default Component;
