import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6468db5n.css';
import '../../css/z/z6yg-qblf.css';
import '../../css/v/v-u89ackx.css';
import '../../css/l/l5ibq-bxt.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q6468db5n"/><path class="z6yg-qblf"/><path class="v-u89ackx"/><path class="l5ibq-bxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:fusion"} {...others} />);
}

export default Component;
