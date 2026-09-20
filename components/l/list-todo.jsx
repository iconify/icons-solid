import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h9lk5lbki.css';
import '../../css/m/mkmh0y-1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h9lk5lbki"/><rect class="mkmh0y-1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:list-todo"} {...others} />);
}

export default Component;
