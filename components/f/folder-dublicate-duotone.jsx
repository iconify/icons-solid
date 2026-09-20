import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am28lx2fj.css';
import '../../css/n/ncr5l6peb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="am28lx2fj"/><path class="ncr5l6peb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-dublicate-duotone"} {...others} />);
}

export default Component;
