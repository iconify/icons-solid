import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyf99sf2t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fyf99sf2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:credit-card-remove"} {...others} />);
}

export default Component;
