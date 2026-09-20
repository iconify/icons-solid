import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3fl0b47k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d3fl0b47k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:lasso-tool-remix"} {...others} />);
}

export default Component;
