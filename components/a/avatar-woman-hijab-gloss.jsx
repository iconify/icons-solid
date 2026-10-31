import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc41uk-dj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uc41uk-dj wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-hijab-gloss"} {...others} />);
}

export default Component;
