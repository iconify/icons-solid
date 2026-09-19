import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjh1g7rma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjh1g7rma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:ease-in-filled"} {...others} />);
}

export default Component;
