import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twg23usft.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" transform="matrix(.5949 0 0 .61208 9.182 1.311)" class="twg23usft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:contentlayer"} {...others} />);
}

export default Component;
