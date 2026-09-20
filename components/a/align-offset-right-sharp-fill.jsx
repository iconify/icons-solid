import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrmll9g5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mrmll9g5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-offset-right-sharp-fill"} {...others} />);
}

export default Component;
