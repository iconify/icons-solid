import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/powm5n7aj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="powm5n7aj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:play-solid"} {...others} />);
}

export default Component;
