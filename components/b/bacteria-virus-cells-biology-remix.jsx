import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9hmq9b4z.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="s9hmq9b4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:bacteria-virus-cells-biology-remix"} {...others} />);
}

export default Component;
