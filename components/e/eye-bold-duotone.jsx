import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/noq8vw_6n.css';
import '../../css/k/k7zx50lak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="noq8vw_6n"/><path clip-rule="evenodd" class="k7zx50lak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:eye-bold-duotone"} {...others} />);
}

export default Component;
