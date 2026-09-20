import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbo2ulb4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rbo2ulb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-facebook-filled"} {...others} />);
}

export default Component;
