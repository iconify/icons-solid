import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-9crtsag.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="l-9crtsag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:color-palette-solid"} {...others} />);
}

export default Component;
