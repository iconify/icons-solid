import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oaj6wfblq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oaj6wfblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:coffee-solid"} {...others} />);
}

export default Component;
