import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3kg0ka3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s3kg0ka3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:gavel-filled"} {...others} />);
}

export default Component;
