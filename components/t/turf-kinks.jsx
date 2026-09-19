import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/togxi8l0i.css';
import '../../css/c/c4i61rb8w.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="togxi8l0i"/><circle class="c4i61rb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-kinks"} {...others} />);
}

export default Component;
