import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8d99nb6o.css';
import '../../css/u/ur2d1ktml.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8d99nb6o"/><path class="ur2d1ktml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:cog"} {...others} />);
}

export default Component;
