import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z24sesp2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z24sesp2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-arrow-right-sharp"} {...others} />);
}

export default Component;
