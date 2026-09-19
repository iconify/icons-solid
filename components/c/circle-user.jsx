import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqq0l5bvw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gqq0l5bvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:circle-user"} {...others} />);
}

export default Component;
