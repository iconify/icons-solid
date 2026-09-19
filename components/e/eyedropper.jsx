import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2pg9jc9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u2pg9jc9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:eyedropper"} {...others} />);
}

export default Component;
