import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olibj9bmi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="olibj9bmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:rate-stretch-tool-solid"} {...others} />);
}

export default Component;
