import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7ae3acat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b7ae3acat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:space-between-v"} {...others} />);
}

export default Component;
