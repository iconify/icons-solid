import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gro_6ubgm.css';
import '../../css/b/b59azjj9a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gro_6ubgm"/><path class="b59azjj9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:document-duplicate-16-solid"} {...others} />);
}

export default Component;
