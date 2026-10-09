import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnku0e3st.css';
import '../../css/u/uc2ua4u2t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gnku0e3st"/><path class="uc2ua4u2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cylinder-48"} {...others} />);
}

export default Component;
