import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6jbv-bsq.css';
import '../../css/t/tvn_kseps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6jbv-bsq"/><path class="tvn_kseps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-woman-home-bold"} {...others} />);
}

export default Component;
