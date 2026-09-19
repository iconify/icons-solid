import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a34mmrbvv.css';

const viewBox = {"width":1792,"height":1600};
const content = `<path class="a34mmrbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:mail-reply"} {...others} />);
}

export default Component;
