import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8d96qbpq.css';
import '../../css/v/v5jciabna.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i8d96qbpq"/><path class="v5jciabna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-bold-duotone"} {...others} />);
}

export default Component;
