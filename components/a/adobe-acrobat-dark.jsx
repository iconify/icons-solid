import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8w8v-egj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z8w8v-egj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adobe-acrobat-dark"} {...others} />);
}

export default Component;
