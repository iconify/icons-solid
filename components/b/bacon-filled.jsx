import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqg1e6ggw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqg1e6ggw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bacon-filled"} {...others} />);
}

export default Component;
