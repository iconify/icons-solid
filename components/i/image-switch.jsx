import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm5zddb2t.css';
import '../../css/v/vcti67wgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qm5zddb2t"/><path class="vcti67wgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-switch"} {...others} />);
}

export default Component;
