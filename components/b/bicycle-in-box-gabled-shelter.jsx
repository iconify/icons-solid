import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxta4n_om.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gxta4n_om"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bicycle-in-box-gabled-shelter"} {...others} />);
}

export default Component;
