import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a49qpo9jk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a49qpo9jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:scissors-2-bold"} {...others} />);
}

export default Component;
