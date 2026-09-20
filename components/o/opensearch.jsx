import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bll1o-bzb.css';
import '../../css/v/v-kzk1h6b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bll1o-bzb"/><path class="v-kzk1h6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opensearch"} {...others} />);
}

export default Component;
