import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs_pu7psi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hs_pu7psi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:photo-plus-solid"} {...others} />);
}

export default Component;
