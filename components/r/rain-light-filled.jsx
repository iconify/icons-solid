import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/boc6a8b6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="boc6a8b6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:rain-light-filled"} {...others} />);
}

export default Component;
