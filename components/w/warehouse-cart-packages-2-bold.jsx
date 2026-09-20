import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbma2iban.css';
import '../../css/f/fv36o8gan.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sbma2iban"/><path class="fv36o8gan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:warehouse-cart-packages-2-bold"} {...others} />);
}

export default Component;
