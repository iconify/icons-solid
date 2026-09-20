import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0g1x7baf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e0g1x7baf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-receive3-filled"} {...others} />);
}

export default Component;
