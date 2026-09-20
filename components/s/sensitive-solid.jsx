import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssj6w-3vo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ssj6w-3vo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:sensitive-solid"} {...others} />);
}

export default Component;
