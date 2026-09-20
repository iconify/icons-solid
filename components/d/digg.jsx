import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y39j1xb_n.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4.5};
const content = `<path class="y39j1xb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:digg"} {...others} />);
}

export default Component;
