import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/e/et8gjv.css';
import '../../css/e/erpyod.css';
import '../../css/a/avyd9d.css';
import '../../css/s/so-from-42.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c et8gjv"/><path class="a0m25c erpyod"/><path class="a0m25c avyd9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:external-link"} {...others} />);
}

export default Component;
