import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m49-_o60c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m49-_o60c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:techcrunch"} {...others} />);
}

export default Component;
