import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj1mfwsdr.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="lj1mfwsdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:pdf-reader-application-flat"} {...others} />);
}

export default Component;
