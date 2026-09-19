import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w697-jb9w.css';
import '../../css/o/occ68iv3s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w697-jb9w"/><path class="occ68iv3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:sidebar"} {...others} />);
}

export default Component;
