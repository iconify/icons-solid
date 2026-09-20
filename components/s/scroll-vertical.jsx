import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxsp-3jny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qxsp-3jny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:scroll-vertical"} {...others} />);
}

export default Component;
