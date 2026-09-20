import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzhxywx4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vzhxywx4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:flip-reflect-up"} {...others} />);
}

export default Component;
