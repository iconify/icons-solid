import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhwrucx5l.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bhwrucx5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:micro-sd-card-outline"} {...others} />);
}

export default Component;
