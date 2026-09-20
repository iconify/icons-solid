import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8chzhbth.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1.5};
const content = `<path class="n8chzhbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:plane"} {...others} />);
}

export default Component;
