import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq_5smh8d.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-1.5};
const content = `<path class="tq_5smh8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:water-drop-f"} {...others} />);
}

export default Component;
