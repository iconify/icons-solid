import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onkmiv9yn.css';
import '../../css/r/rxum_jega.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="onkmiv9yn"/><path class="rxum_jega"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:touch-up-1-bold"} {...others} />);
}

export default Component;
