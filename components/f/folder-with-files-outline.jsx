import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brzmvc2-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="brzmvc2-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-with-files-outline"} {...others} />);
}

export default Component;
