import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrhv1bcks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qrhv1bcks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:tablet-x"} {...others} />);
}

export default Component;
