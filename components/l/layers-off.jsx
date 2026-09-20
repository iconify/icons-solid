import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmdc7ubzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xmdc7ubzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:layers-off"} {...others} />);
}

export default Component;
