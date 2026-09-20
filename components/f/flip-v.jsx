import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h487fqb7i.css';
import '../../css/q/qr1w69buc.css';
import '../../css/i/i72xiccgx.css';
import '../../css/v/v3931n20j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h487fqb7i"/><path class="qr1w69buc"/><path class="i72xiccgx"/><path class="v3931n20j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:flip-v"} {...others} />);
}

export default Component;
