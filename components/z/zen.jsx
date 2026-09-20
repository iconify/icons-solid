import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ueu-zdbxw.css';
import '../../css/m/m_hk1_b6x.css';
import '../../css/g/g4uvfabpz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ueu-zdbxw"/><path class="m_hk1_b6x"/><path class="g4uvfabpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:zen"} {...others} />);
}

export default Component;
