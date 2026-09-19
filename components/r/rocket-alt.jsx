import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwiag_bln.css';
import '../../css/w/wzeup5m6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iwiag_bln"/><path class="wzeup5m6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rocket-alt"} {...others} />);
}

export default Component;
