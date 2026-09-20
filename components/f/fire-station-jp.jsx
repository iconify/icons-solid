import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smckz5bxw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="smckz5bxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:fire-station-jp"} {...others} />);
}

export default Component;
