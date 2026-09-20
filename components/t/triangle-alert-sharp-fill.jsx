import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjs5d_nch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjs5d_nch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:triangle-alert-sharp-fill"} {...others} />);
}

export default Component;
