import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n94qq4b9b.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="n94qq4b9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:sun-cloud-solid"} {...others} />);
}

export default Component;
