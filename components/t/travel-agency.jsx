import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqd4un0bu.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="jqd4un0bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:travel-agency"} {...others} />);
}

export default Component;
