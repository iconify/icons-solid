import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyopewbrh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tyopewbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:checkbox-sharp"} {...others} />);
}

export default Component;
