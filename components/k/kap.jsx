import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtzzwi6_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qtzzwi6_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kap"} {...others} />);
}

export default Component;
