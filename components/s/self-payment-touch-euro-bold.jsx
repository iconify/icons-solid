import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmuork2pm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mmuork2pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:self-payment-touch-euro-bold"} {...others} />);
}

export default Component;
