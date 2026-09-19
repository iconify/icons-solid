import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuh6yiurz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kuh6yiurz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:airgradient-alt"} {...others} />);
}

export default Component;
