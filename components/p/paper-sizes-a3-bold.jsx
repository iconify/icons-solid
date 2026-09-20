import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4arvnpdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j4arvnpdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:paper-sizes-a3-bold"} {...others} />);
}

export default Component;
