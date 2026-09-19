import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz-o-n5vs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oz-o-n5vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:thin-long-02-down"} {...others} />);
}

export default Component;
