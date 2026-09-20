import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-dv-5xcd.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="p-dv-5xcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:arrow-up-1-flat"} {...others} />);
}

export default Component;
