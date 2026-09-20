import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/utu1-bc8d.css';
import '../../css/i/i7qck1g8i.css';
import '../../css/g/go8csgqoe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="utu1-bc8d"/><path class="i7qck1g8i"/><path class="go8csgqoe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:money-wallet-open"} {...others} />);
}

export default Component;
