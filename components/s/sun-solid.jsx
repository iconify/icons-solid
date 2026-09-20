import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3q760j9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d3q760j9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:sun-solid"} {...others} />);
}

export default Component;
