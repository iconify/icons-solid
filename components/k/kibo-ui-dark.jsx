import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngpo3ddrb.css';

const viewBox = {"width":117,"height":116};
const content = `<path clip-rule="evenodd" class="ngpo3ddrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kibo-ui-dark"} {...others} />);
}

export default Component;
