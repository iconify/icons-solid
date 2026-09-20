import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2tubu.css';
import '../../css/k/k2j92f.css';
import '../../css/u/u_6lhy.css';
import '../../css/h/h2n28i.css';
import '../../css/s/so-from-52.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2px.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2tubu"/><circle class="k2j92f u_6lhy"/><circle class="h2n28i k2j92f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:pizza"} {...others} />);
}

export default Component;
