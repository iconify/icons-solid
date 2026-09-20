import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc4op3bci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vc4op3bci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:expand-vertical"} {...others} />);
}

export default Component;
