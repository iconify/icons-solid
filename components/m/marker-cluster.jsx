import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je7-rtbjy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="je7-rtbjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:marker-cluster"} {...others} />);
}

export default Component;
