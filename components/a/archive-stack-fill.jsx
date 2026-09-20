import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itj2tfnbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="itj2tfnbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:archive-stack-fill"} {...others} />);
}

export default Component;
