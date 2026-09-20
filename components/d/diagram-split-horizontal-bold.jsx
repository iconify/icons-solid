import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu3t20bdu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xu3t20bdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:diagram-split-horizontal-bold"} {...others} />);
}

export default Component;
