import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sp5ysukwo.css';
import '../../css/r/rve223_3q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sp5ysukwo"/><path class="rve223_3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:commit-24"} {...others} />);
}

export default Component;
