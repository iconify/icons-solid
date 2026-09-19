import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmcm0s1it.css';
import '../../css/h/hmryub9or.css';

const viewBox = {"width":16,"height":16};
const content = `<path transform="matrix(.92099 0 0 .92169 -.41 .382)" class="bmcm0s1it"/><path class="hmryub9or"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:cursor-ignore"} {...others} />);
}

export default Component;
