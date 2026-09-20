import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh2k2lb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fh2k2lb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:brand-trello-solid"} {...others} />);
}

export default Component;
