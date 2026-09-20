import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5lz9no8r.css';
import '../../css/b/b5b9_cc2c.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="a5lz9no8r"/><circle class="b5b9_cc2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:uptimerobot"} {...others} />);
}

export default Component;
