import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz01z324w.css';
import '../../css/i/igtvqq5bu.css';
import '../../css/f/fpndi3bcf.css';
import '../../css/s/snslpzbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cz01z324w"/><path class="igtvqq5bu"/><path clip-rule="evenodd" class="fpndi3bcf"/><path class="snslpzbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-smile-outline"} {...others} />);
}

export default Component;
