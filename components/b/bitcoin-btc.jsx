import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcvbmhb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tcvbmhb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:bitcoin-btc"} {...others} />);
}

export default Component;
