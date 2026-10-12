import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iae1v6etf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iae1v6etf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-chevron-left-filled"} {...others} />);
}

export default Component;
