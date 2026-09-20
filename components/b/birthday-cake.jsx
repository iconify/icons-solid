import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo0whm7za.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1};
const content = `<path class="jo0whm7za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:birthday-cake"} {...others} />);
}

export default Component;
