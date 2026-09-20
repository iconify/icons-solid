import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9_od2b9f.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="r9_od2b9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:dog-park-11"} {...others} />);
}

export default Component;
