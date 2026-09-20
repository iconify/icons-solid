import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e28z0dvfk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e28z0dvfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-off"} {...others} />);
}

export default Component;
