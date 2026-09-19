import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icd85j45o.css';

const viewBox = {"width":1280,"height":1536};
const content = `<path class="icd85j45o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:paragraph"} {...others} />);
}

export default Component;
