import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh7jq3fss.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="yh7jq3fss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:postcss"} {...others} />);
}

export default Component;
