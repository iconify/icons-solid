import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gelac1c3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gelac1c3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sugar-coated-haws-line"} {...others} />);
}

export default Component;
