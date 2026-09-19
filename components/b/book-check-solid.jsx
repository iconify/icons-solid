import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zny6c7bnn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zny6c7bnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:book-check-solid"} {...others} />);
}

export default Component;
