import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crh91xb0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crh91xb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:weather-sun"} {...others} />);
}

export default Component;
