import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn1aavbvf.css';
import '../../css/o/o4h750biq.css';
import '../../css/b/bqal6hxdu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tn1aavbvf"/><path class="o4h750biq"/><path class="bqal6hxdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-forms-2019-dark"} {...others} />);
}

export default Component;
