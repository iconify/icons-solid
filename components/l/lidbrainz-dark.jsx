import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmi7xr5ec.css';
import '../../css/r/re6u8gbgx.css';
import '../../css/b/bpn6pm9pz.css';
import '../../css/u/uacs7ebvg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mmi7xr5ec"/><path class="re6u8gbgx"/><path class="bpn6pm9pz"/><path class="uacs7ebvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lidbrainz-dark"} {...others} />);
}

export default Component;
