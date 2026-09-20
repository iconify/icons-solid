import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovjgg_gxh.css';
import '../../css/p/psfb6tk7k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ouiIcon__fillSecondary ovjgg_gxh"/><path class="psfb6tk7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-auditbeat"} {...others} />);
}

export default Component;
