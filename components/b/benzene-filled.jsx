import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh9thnbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wh9thnbdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:benzene-filled"} {...others} />);
}

export default Component;
