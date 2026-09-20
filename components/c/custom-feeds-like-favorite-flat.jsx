import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwex4w58m.css';
import '../../css/g/gs40dil7g.css';
import '../../css/v/v0rl8j3gy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jwex4w58m"/><path class="gs40dil7g"/><path class="v0rl8j3gy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:custom-feeds-like-favorite-flat"} {...others} />);
}

export default Component;
