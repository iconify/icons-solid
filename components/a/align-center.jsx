import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocaehubvo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ocaehubvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:align-center"} {...others} />);
}

export default Component;
