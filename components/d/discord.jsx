import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8d4mwbzs.css';
import '../../css/m/ml8_8mbod.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8d4mwbzs"/><path class="ml8_8mbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:discord"} {...others} />);
}

export default Component;
