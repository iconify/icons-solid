import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by5-f4bvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="by5-f4bvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:currency-filled"} {...others} />);
}

export default Component;
