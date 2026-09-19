import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw2gtd80r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qw2gtd80r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bucket-filled"} {...others} />);
}

export default Component;
