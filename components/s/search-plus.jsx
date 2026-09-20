import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9v4b39in.css';
import '../../css/x/x8-usg97v.css';

const viewBox = {"width":24,"height":25};
const content = `<path class="c9v4b39in"/><path clip-rule="evenodd" class="x8-usg97v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:search-plus"} {...others} />);
}

export default Component;
