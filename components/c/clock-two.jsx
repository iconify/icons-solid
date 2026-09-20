import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrxlgg64z.css';
import '../../css/h/hzgg3n9zf.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="hrxlgg64z"/><path class="hzgg3n9zf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:clock-two"} {...others} />);
}

export default Component;
