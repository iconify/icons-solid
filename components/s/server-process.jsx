import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg5v6ebyq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mg5v6ebyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:server-process"} {...others} />);
}

export default Component;
