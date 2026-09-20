import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofaq-pqxl.css';
import '../../css/p/ph8y6rbyy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ofaq-pqxl"/><path class="ph8y6rbyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:heavy-rain-fill"} {...others} />);
}

export default Component;
