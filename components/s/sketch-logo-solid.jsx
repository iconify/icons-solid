import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8s4vkb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o8s4vkb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:sketch-logo-solid"} {...others} />);
}

export default Component;
