import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1b_p5bbe.css';
import '../../css/o/ogqh4qb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s1b_p5bbe"/><path class="ogqh4qb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:boombox-filled"} {...others} />);
}

export default Component;
