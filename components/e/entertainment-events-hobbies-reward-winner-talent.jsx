import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jran4bcqd.css';
import '../../css/r/rej50nu6w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jran4bcqd"/><path class="rej50nu6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-reward-winner-talent"} {...others} />);
}

export default Component;
