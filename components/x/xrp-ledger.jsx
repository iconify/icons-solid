import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxxkiuv1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vxxkiuv1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xrp-ledger"} {...others} />);
}

export default Component;
