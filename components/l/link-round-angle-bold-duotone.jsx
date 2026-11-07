import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nt-_h2mmy.css';
import '../../css/g/ge8axobmf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nt-_h2mmy"/><path class="ge8axobmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-round-angle-bold-duotone"} {...others} />);
}

export default Component;
