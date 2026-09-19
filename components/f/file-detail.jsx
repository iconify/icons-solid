import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z132mnbgz.css';
import '../../css/g/gcakk6n9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z132mnbgz"/><path class="gcakk6n9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:file-detail"} {...others} />);
}

export default Component;
