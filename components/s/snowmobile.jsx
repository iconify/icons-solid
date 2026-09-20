import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt0lgbd7n.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="qt0lgbd7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:snowmobile"} {...others} />);
}

export default Component;
