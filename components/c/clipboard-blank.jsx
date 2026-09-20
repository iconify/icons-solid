import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qezco3lak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qezco3lak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:clipboard-blank"} {...others} />);
}

export default Component;
