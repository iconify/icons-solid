import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nellz_brh.css';
import '../../css/o/oubl2pb5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nellz_brh"/><path class="oubl2pb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:time-clock-hand-1-bold"} {...others} />);
}

export default Component;
