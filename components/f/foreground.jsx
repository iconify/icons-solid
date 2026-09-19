import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r90syqbvp.css';
import '../../css/j/jcmaqeb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r90syqbvp"/><path class="jcmaqeb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:foreground"} {...others} />);
}

export default Component;
