import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0tbw8hxj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v0tbw8hxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:arrow-up-dashed-square"} {...others} />);
}

export default Component;
