import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx93t8bdb.css';
import '../../css/b/bj2qr51xp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mx93t8bdb"/><path clip-rule="evenodd" class="bj2qr51xp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:ellipsis-h-duotone"} {...others} />);
}

export default Component;
