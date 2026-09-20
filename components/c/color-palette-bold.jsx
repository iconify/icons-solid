import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p93f7gb_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p93f7gb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:color-palette-bold"} {...others} />);
}

export default Component;
