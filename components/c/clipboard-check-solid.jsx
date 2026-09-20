import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7k-5-n4o.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="c7k-5-n4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:clipboard-check-solid"} {...others} />);
}

export default Component;
