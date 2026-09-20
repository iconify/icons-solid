import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwu2i75do.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uwu2i75do"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:move-diagonal-one-solid"} {...others} />);
}

export default Component;
