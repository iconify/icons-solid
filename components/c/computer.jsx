import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmpd__bdx.css';
import '../../css/a/a30rl-bmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b fmpd__bdx"/><path class="a30rl-bmq b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:computer"} {...others} />);
}

export default Component;
