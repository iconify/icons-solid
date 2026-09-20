import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6o-0jb_a.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="a6o-0jb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:clean-water-and-sanitation-solid"} {...others} />);
}

export default Component;
