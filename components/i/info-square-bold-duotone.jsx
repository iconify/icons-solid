import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv_hji6de.css';
import '../../css/e/epahso09d.css';
import '../../css/g/g2-dgp5yi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv_hji6de"/><path class="epahso09d"/><path class="g2-dgp5yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:info-square-bold-duotone"} {...others} />);
}

export default Component;
