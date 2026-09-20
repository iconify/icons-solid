import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt6-dubor.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tt6-dubor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:bold-cyrl-palochka"} {...others} />);
}

export default Component;
