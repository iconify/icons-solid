import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtdgojbru.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wtdgojbru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:chairs-table-platter"} {...others} />);
}

export default Component;
