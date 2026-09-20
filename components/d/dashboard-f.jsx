import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/giv9vwr2b.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4.5};
const content = `<path class="giv9vwr2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:dashboard-f"} {...others} />);
}

export default Component;
