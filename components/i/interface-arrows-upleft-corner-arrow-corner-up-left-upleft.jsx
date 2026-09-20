import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tulnqjltw.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="tulnqjltw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-upleft-corner-arrow-corner-up-left-upleft"} {...others} />);
}

export default Component;
