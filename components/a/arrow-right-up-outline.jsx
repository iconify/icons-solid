import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cib8es_1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cib8es_1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-up-outline"} {...others} />);
}

export default Component;
