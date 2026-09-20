import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjsr0epqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hjsr0epqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:triumphal-arch-fill"} {...others} />);
}

export default Component;
