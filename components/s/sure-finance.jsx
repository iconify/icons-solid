import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pt6m2xbua.css';
import '../../css/u/u9cjpybxq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pt6m2xbua"/><path class="u9cjpybxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sure-finance"} {...others} />);
}

export default Component;
