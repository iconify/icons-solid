import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwiq4dznf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uwiq4dznf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lamp-05"} {...others} />);
}

export default Component;
