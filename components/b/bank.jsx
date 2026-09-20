import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivanhnbdc.css';
import '../../css/q/q-befwo0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ivanhnbdc"/><path class="q-befwo0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:bank"} {...others} />);
}

export default Component;
