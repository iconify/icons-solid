import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x72m91b6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary x72m91b6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:focus-duotone"} {...others} />);
}

export default Component;
