import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzo9n2i8a.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mzo9n2i8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:cake-slice-remix"} {...others} />);
}

export default Component;
