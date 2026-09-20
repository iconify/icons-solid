import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmt0j8b9a.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mmt0j8b9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:viewpoint"} {...others} />);
}

export default Component;
