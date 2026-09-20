import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuw4xv0mp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vuw4xv0mp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:mine-cart-2-solid"} {...others} />);
}

export default Component;
