import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvg_1-o8n.css';
import '../../css/m/m0esjaiqj.css';
import '../../css/a/abtzwvxwi.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="uvg_1-o8n"/><rect class="m0esjaiqj"/><path class="abtzwvxwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:align-horizontal-justify-center-filled"} {...others} />);
}

export default Component;
