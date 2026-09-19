import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1i1pzulb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l1i1pzulb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:check-circle-fill"} {...others} />);
}

export default Component;
