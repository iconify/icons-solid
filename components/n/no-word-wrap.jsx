import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gar7pzrar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gar7pzrar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:no-word-wrap"} {...others} />);
}

export default Component;
