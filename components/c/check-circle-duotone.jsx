import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x63fcn5tz.css';
import '../../css/t/tymptoban.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x63fcn5tz"/><path class="tymptoban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:check-circle-duotone"} {...others} />);
}

export default Component;
