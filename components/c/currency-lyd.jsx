import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6_dgeb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g6_dgeb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:currency-lyd"} {...others} />);
}

export default Component;
