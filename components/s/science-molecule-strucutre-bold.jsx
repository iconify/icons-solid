import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-illub7i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z-illub7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:science-molecule-strucutre-bold"} {...others} />);
}

export default Component;
