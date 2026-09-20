import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amlzk90ad.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="amlzk90ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:religious-muslim-11"} {...others} />);
}

export default Component;
