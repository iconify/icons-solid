import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rve9bjm7q.css';
import '../../css/w/wtuwfnr6g.css';
import '../../css/i/isltlb-7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rve9bjm7q"/><path class="wtuwfnr6g"/><path clip-rule="evenodd" class="isltlb-7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-recive-bold"} {...others} />);
}

export default Component;
