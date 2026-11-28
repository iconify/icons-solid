import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phkdd0b6a.css';
import '../../css/d/d0bxfnb3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="phkdd0b6a secondary"/><path class="d0bxfnb3f primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:semicircle-duo"} {...others} />);
}

export default Component;
