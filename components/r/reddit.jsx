import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqu5lsb_r.css';
import '../../css/e/e09mkx9uq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gqu5lsb_r"/><path clip-rule="evenodd" class="e09mkx9uq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:reddit"} {...others} />);
}

export default Component;
