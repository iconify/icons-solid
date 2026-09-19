import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax7zwolhm.css';
import '../../css/a/ant9fwtwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ax7zwolhm"/><path class="ant9fwtwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:big-data-outlined"} {...others} />);
}

export default Component;
