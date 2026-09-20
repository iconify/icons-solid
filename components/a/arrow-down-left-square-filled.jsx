import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu56-l6qp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xu56-l6qp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-down-left-square-filled"} {...others} />);
}

export default Component;
