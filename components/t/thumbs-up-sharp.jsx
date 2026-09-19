import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1cbfwy3r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z1cbfwy3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:thumbs-up-sharp"} {...others} />);
}

export default Component;
