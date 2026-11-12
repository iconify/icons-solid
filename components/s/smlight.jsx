import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1cxj__-m.css';
import '../../css/a/a5t35j_6j.css';
import '../../css/w/w3mbvw3se.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="y1cxj__-m"/><circle class="a5t35j_6j"/><circle class="w3mbvw3se"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:smlight"} {...others} />);
}

export default Component;
