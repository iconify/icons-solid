import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfae_b7ux.css';
import '../../css/d/dqr3ofb2c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lfae_b7ux"/><circle class="dqr3ofb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:d"} {...others} />);
}

export default Component;
