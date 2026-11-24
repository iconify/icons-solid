import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8i9flbaf.css';
import '../../css/n/njfu2s7nv.css';
import '../../css/y/yhgcxzo7f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x8i9flbaf"/><path class="njfu2s7nv"/><path class="yhgcxzo7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layers-arrow-up-filled"} {...others} />);
}

export default Component;
