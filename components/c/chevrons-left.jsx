import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2vzr5v5s.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-5};
const content = `<path class="m2vzr5v5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:chevrons-left"} {...others} />);
}

export default Component;
