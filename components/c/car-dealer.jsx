import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_zuvlbrl.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="d_zuvlbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:car-dealer"} {...others} />);
}

export default Component;
