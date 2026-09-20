import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr_wuucje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jr_wuucje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:ruler-combined"} {...others} />);
}

export default Component;
