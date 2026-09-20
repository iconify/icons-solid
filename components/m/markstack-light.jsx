import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4gyquu4g.css';
import '../../css/k/kuyk5mn6b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x4gyquu4g"/><path class="kuyk5mn6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:markstack-light"} {...others} />);
}

export default Component;
