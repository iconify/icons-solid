import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6842ab4y.css';
import '../../css/m/mx48p9b3a.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="r6842ab4y"/><path class="mx48p9b3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:page-edit"} {...others} />);
}

export default Component;
