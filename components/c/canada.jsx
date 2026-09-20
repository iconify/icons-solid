import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7x5h9bzy.css';
import '../../css/x/xr638ub-f.css';
import '../../css/o/owgzb9byq.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s7x5h9bzy"/><path class="xr638ub-f"/><path class="owgzb9byq"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:canada"} {...others} />);
}

export default Component;
