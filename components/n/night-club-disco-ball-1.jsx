import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3n9mrxup.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d3n9mrxup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:night-club-disco-ball-1"} {...others} />);
}

export default Component;
