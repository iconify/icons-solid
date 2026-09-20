import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l29605bwn.css';
import '../../css/u/ur2d1ktml.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l29605bwn"/><path class="ur2d1ktml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:sun"} {...others} />);
}

export default Component;
