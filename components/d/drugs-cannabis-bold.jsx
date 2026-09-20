import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us2i0vbzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="us2i0vbzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:drugs-cannabis-bold"} {...others} />);
}

export default Component;
