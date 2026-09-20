import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1fcab9xe.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="m1fcab9xe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:scuba-diving"} {...others} />);
}

export default Component;
