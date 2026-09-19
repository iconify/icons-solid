import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhvlu6b2s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vhvlu6b2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:folder-symlink-fill"} {...others} />);
}

export default Component;
