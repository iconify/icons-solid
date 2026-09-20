import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrne95bef.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nrne95bef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:branch-line-5-bold"} {...others} />);
}

export default Component;
