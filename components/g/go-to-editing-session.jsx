import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsr76kaca.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lsr76kaca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:go-to-editing-session"} {...others} />);
}

export default Component;
