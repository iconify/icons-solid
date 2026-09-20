import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kucghu1pp.css';
import '../../css/v/v3bumgb4y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kucghu1pp"/><path class="v3bumgb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:real-debrid-dark"} {...others} />);
}

export default Component;
