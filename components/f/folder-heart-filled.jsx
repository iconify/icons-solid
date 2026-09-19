import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbu8cib5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gbu8cib5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:folder-heart-filled"} {...others} />);
}

export default Component;
