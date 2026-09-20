import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajujhin6n.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="ajujhin6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:chevrons-square-up-right"} {...others} />);
}

export default Component;
