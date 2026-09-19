import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk7y3tbvz.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="mk7y3tbvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:th-large"} {...others} />);
}

export default Component;
