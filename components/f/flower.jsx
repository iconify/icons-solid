import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7d-ndb_c.css';
import '../../css/h/hx4nelfav.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="q7d-ndb_c"/><path class="hx4nelfav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:flower"} {...others} />);
}

export default Component;
