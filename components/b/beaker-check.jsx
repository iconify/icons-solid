import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttylqjt1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ttylqjt1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:beaker-check"} {...others} />);
}

export default Component;
