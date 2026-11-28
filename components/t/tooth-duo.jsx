import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in_f27l9g.css';
import '../../css/l/l-21abmhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="in_f27l9g secondary"/><path class="l-21abmhq primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tooth-duo"} {...others} />);
}

export default Component;
