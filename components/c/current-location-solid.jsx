import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pejqq1mje.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pejqq1mje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:current-location-solid"} {...others} />);
}

export default Component;
