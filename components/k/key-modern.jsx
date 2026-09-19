import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn2aw68ax.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tn2aw68ax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:key-modern"} {...others} />);
}

export default Component;
