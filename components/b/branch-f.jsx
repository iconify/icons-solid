import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4mcjdb3s.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-1.5};
const content = `<path class="d4mcjdb3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:branch-f"} {...others} />);
}

export default Component;
