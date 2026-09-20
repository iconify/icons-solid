import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2cpzg7mf.css';
import '../../css/a/al1qwvblu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z2cpzg7mf"/><path class="al1qwvblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cash-payment-sign-2-bold"} {...others} />);
}

export default Component;
