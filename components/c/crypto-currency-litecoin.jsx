import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcehwxpiv.css';
import '../../css/q/qs3nn1ykv.css';
import '../../css/o/o3v08d-1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gcehwxpiv"/><path class="qs3nn1ykv"/><path class="o3v08d-1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:crypto-currency-litecoin"} {...others} />);
}

export default Component;
