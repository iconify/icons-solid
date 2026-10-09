import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyr9-qb4r.css';
import '../../css/f/fcdrigb7l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dyr9-qb4r"/><path class="fcdrigb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crucible-20"} {...others} />);
}

export default Component;
