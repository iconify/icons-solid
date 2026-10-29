import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnd4zcbem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnd4zcbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:redo-solid"} {...others} />);
}

export default Component;
