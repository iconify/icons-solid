import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-odk-bkz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z-odk-bkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:game-controller-sharp"} {...others} />);
}

export default Component;
