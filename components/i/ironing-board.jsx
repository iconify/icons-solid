import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebs3ndmsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ebs3ndmsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:ironing-board"} {...others} />);
}

export default Component;
