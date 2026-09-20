import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/i/ii-ao702o.css';
import '../../css/y/yx66z0zyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="ii-ao702o"/><path class="yx66z0zyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-handshake-deal"} {...others} />);
}

export default Component;
