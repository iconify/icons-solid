import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3nf8db3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w3nf8db3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:controller-wireless-remix"} {...others} />);
}

export default Component;
