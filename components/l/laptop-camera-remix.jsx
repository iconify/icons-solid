import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbez5bb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nbez5bb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:laptop-camera-remix"} {...others} />);
}

export default Component;
