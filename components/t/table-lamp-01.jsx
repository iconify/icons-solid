import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr-9cvk0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mr-9cvk0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:table-lamp-01"} {...others} />);
}

export default Component;
