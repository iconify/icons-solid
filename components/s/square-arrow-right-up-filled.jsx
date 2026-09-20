import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw77ssi0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uw77ssi0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:square-arrow-right-up-filled"} {...others} />);
}

export default Component;
