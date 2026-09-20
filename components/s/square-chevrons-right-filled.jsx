import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8h8q4bhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t8h8q4bhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-chevrons-right-filled"} {...others} />);
}

export default Component;
