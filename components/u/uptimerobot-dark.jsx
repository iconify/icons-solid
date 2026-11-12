import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuq0axb2c.css';
import '../../css/u/uhazafbmy.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="iuq0axb2c"/><circle class="uhazafbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:uptimerobot-dark"} {...others} />);
}

export default Component;
