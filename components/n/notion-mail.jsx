import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9xj9c1ac.css';
import '../../css/e/ec97ebbsu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r9xj9c1ac"/><path class="ec97ebbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:notion-mail"} {...others} />);
}

export default Component;
