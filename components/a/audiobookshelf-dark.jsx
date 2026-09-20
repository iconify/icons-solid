import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz238-fks.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xz238-fks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:audiobookshelf-dark"} {...others} />);
}

export default Component;
