import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b38rg11dk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b38rg11dk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:star-2-flat"} {...others} />);
}

export default Component;
