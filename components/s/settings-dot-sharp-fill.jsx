import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvxyueb_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wvxyueb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:settings-dot-sharp-fill"} {...others} />);
}

export default Component;
