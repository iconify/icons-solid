import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvalutb3t.css';
import '../../css/e/eqdsrrcni.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="qvalutb3t"/><path class="eqdsrrcni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-patreon"} {...others} />);
}

export default Component;
