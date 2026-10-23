import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dum2n6gev.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dum2n6gev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:compare"} {...others} />);
}

export default Component;
