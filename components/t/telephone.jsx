import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcrcaid9g.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="rcrcaid9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:telephone"} {...others} />);
}

export default Component;
