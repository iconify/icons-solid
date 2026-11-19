import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di7i0q5_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="di7i0q5_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:zendure-solarflow-2400-ac-plus"} {...others} />);
}

export default Component;
