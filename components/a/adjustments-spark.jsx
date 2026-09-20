import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z22fae9xe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z22fae9xe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:adjustments-spark"} {...others} />);
}

export default Component;
