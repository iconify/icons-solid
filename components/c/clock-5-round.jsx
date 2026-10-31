import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1f5b8moy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a1f5b8moy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clock-5-round"} {...others} />);
}

export default Component;
