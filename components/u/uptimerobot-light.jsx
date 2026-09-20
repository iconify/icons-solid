import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sniv8rcns.css';
import '../../css/o/oss8yqu8p.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="sniv8rcns"/><circle class="oss8yqu8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:uptimerobot-light"} {...others} />);
}

export default Component;
