import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_09qxp9t.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="x_09qxp9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:zodiac-9-remix"} {...others} />);
}

export default Component;
