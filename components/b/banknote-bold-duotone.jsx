import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flxmbubhy.css';
import '../../css/n/nvklklbjn.css';
import '../../css/r/ri6h5bc1k.css';
import '../../css/r/rbjjgofgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="flxmbubhy"/><path class="nvklklbjn"/><path class="ri6h5bc1k"/><path clip-rule="evenodd" class="rbjjgofgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:banknote-bold-duotone"} {...others} />);
}

export default Component;
