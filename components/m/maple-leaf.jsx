import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snp287xku.css';
import '../../css/f/fopv7ibks.css';
import '../../css/u/umgjheujn.css';
import '../../css/y/yuo7fm28c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="snp287xku"/><path class="fopv7ibks"/><path class="umgjheujn"/><path class="yuo7fm28c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:maple-leaf"} {...others} />);
}

export default Component;
