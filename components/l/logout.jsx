import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/v/vlsv6c.css';
import '../../css/l/lo--7m.css';
import '../../css/x/xx5a5k.css';
import '../../css/s/so-from-34.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c vlsv6c"/><path class="a0m25c lo--7m"/><path class="a0m25c xx5a5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:logout"} {...others} />);
}

export default Component;
