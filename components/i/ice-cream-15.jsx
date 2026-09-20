import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc97kzb0z.css';
import '../../css/s/sgq67hbqs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mc97kzb0z"/><path class="sgq67hbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:ice-cream-15"} {...others} />);
}

export default Component;
