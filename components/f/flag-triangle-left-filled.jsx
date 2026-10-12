import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6625acdp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k6625acdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:flag-triangle-left-filled"} {...others} />);
}

export default Component;
