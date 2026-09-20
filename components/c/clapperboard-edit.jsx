import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcbqanb_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xcbqanb_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:clapperboard-edit"} {...others} />);
}

export default Component;
