import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enw5fd1wr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="enw5fd1wr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:nightclub"} {...others} />);
}

export default Component;
