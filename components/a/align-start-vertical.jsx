import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dr6v161zu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dr6v161zu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:align-start-vertical"} {...others} />);
}

export default Component;
