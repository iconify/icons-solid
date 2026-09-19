import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmf952b5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rmf952b5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-bag-outline-24px"} {...others} />);
}

export default Component;
