import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5ry4ve3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z5ry4ve3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:arrow-turn-down-large-flat"} {...others} />);
}

export default Component;
