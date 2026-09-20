import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-ptle43l.css';
import '../../css/m/m_sbruuwk.css';
import '../../css/i/ipoqbei5r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x-ptle43l"/><path class="m_sbruuwk"/><path class="ipoqbei5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamyfin"} {...others} />);
}

export default Component;
