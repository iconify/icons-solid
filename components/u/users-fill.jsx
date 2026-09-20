import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuqu0cbld.css';
import '../../css/k/karvylbky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zuqu0cbld"/><path class="karvylbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:users-fill"} {...others} />);
}

export default Component;
