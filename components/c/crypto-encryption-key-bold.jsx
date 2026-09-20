import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oez_tozby.css';
import '../../css/y/y80r9ybqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oez_tozby"/><path class="y80r9ybqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:crypto-encryption-key-bold"} {...others} />);
}

export default Component;
