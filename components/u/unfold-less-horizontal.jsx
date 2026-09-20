import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s73-gj2tt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s73-gj2tt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:unfold-less-horizontal"} {...others} />);
}

export default Component;
