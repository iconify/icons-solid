import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmytx2b1a.css';
import '../../css/g/gox9jubaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bmytx2b1a"/><path clip-rule="evenodd" class="gox9jubaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-alt-duotone"} {...others} />);
}

export default Component;
