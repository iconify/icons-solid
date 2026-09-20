import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e29om5blv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="e29om5blv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-using-mounted-binoculars"} {...others} />);
}

export default Component;
