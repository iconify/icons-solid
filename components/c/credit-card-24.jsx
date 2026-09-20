import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9mr-b15w.css';
import '../../css/e/ewvinnbde.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m9mr-b15w"/><path class="ewvinnbde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:credit-card-24"} {...others} />);
}

export default Component;
