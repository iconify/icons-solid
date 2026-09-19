import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr2ppd9zo.css';
import '../../css/g/goxr0e-pz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gr2ppd9zo"/><rect class="goxr0e-pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:vertical-spacing-filled"} {...others} />);
}

export default Component;
