import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac2-8hbbw.css';
import '../../css/f/f0g9hjb6c.css';
import '../../css/l/l7s1i2bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="ac2-8hbbw"/><path class="f0g9hjb6c"/><path class="l7s1i2bwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:project-outlined"} {...others} />);
}

export default Component;
