import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qks8ej-gp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qks8ej-gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:langchaincorporate"} {...others} />);
}

export default Component;
