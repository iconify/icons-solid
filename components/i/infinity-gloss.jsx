import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sc9g2ibzv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sc9g2ibzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:infinity-gloss"} {...others} />);
}

export default Component;
