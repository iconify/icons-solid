import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3fbu37eb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v3fbu37eb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-cells-split-outline"} {...others} />);
}

export default Component;
