import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp2n7ka7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pp2n7ka7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:flag"} {...others} />);
}

export default Component;
