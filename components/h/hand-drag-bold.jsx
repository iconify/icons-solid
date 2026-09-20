import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3clegbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h3clegbvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:hand-drag-bold"} {...others} />);
}

export default Component;
