import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1lk6rsix.css';
import '../../css/n/n87-cwb4y.css';
import '../../css/c/cbkcz0b8n.css';
import '../../css/s/sm1_6dbza.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t1lk6rsix"/><path class="n87-cwb4y"/><path class="cbkcz0b8n"/><path class="sm1_6dbza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sendgrid-dark"} {...others} />);
}

export default Component;
