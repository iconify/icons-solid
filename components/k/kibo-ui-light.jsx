import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uniwpj3nt.css';

const viewBox = {"width":117,"height":116};
const content = `<path clip-rule="evenodd" class="uniwpj3nt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kibo-ui-light"} {...others} />);
}

export default Component;
