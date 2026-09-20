import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdnqinu8h.css';
import '../../css/h/hmnz6jb5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bdnqinu8h"/><path class="hmnz6jb5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:timer-countdown-ten"} {...others} />);
}

export default Component;
