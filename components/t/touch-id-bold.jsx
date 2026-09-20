import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz2q8etln.css';
import '../../css/s/s36ol2bou.css';
import '../../css/r/rp5hzg6ry.css';
import '../../css/e/e3fbboboa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iz2q8etln"/><path class="s36ol2bou"/><path class="rp5hzg6ry"/><path class="e3fbboboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:touch-id-bold"} {...others} />);
}

export default Component;
