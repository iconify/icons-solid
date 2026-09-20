import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5i70lbeb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p5i70lbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:adguard-logo-bold"} {...others} />);
}

export default Component;
