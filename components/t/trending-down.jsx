import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afs_3s29k.css';
import '../../css/g/gp4srle1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="afs_3s29k"/><path class="gp4srle1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:trending-down"} {...others} />);
}

export default Component;
