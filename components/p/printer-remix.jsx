import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edkn7ucuq.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="edkn7ucuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:printer-remix"} {...others} />);
}

export default Component;
