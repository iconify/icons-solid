import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yaugexbvp.css';
import '../../css/k/k1bhl7bhd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yaugexbvp"/><path clip-rule="evenodd" class="k1bhl7bhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-star-filled"} {...others} />);
}

export default Component;
