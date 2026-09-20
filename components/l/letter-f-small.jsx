import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og5hd0y1p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="og5hd0y1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:letter-f-small"} {...others} />);
}

export default Component;
