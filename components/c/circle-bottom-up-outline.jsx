import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmhywc98x.css';
import '../../css/h/ho371t52a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kmhywc98x"/><path class="ho371t52a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-bottom-up-outline"} {...others} />);
}

export default Component;
