import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gufolm2bk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gufolm2bk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bottle-filled"} {...others} />);
}

export default Component;
