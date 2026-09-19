import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvg_1-o8n.css';
import '../../css/g/gqj_zqq9u.css';
import '../../css/j/jw_3-cczy.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="uvg_1-o8n"/><rect class="gqj_zqq9u"/><path class="jw_3-cczy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:align-horizontal-justify-start-filled"} {...others} />);
}

export default Component;
