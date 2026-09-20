import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaab5ibre.css';
import '../../css/c/c1rlgi-9k.css';

const viewBox = {"width":420,"height":419};
const content = `<circle paint-order="stroke fill markers" class="qaab5ibre"/><path class="c1rlgi-9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:watchman"} {...others} />);
}

export default Component;
