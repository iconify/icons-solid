import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfmbfrbpt.css';
import '../../css/g/ga2dqzb8j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qfmbfrbpt"/><path class="ga2dqzb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bread"} {...others} />);
}

export default Component;
