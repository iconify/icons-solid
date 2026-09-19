import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kti7wod0f.css';
import '../../css/b/b2126bb3z.css';
import '../../css/p/pet3n157a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kti7wod0f"/><path class="b2126bb3z"/><path class="pet3n157a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:iot"} {...others} />);
}

export default Component;
