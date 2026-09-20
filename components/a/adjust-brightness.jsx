import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akc8dfwwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="akc8dfwwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:adjust-brightness"} {...others} />);
}

export default Component;
