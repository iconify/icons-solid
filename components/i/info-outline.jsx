import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgxek2uzm.css';
import '../../css/r/rneb_3caj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tgxek2uzm"/><circle class="rneb_3caj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:info-outline"} {...others} />);
}

export default Component;
