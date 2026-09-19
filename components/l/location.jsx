import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/poltb9j9g.css';

const viewBox = {"width":42,"height":42};
const content = `<path class="poltb9j9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"topcoat:location"} {...others} />);
}

export default Component;
