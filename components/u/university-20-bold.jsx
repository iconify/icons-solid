import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxncdo88a.css';
import '../../css/d/d1-fx98uq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rxncdo88a"/><path class="d1-fx98uq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:university-20-bold"} {...others} />);
}

export default Component;
