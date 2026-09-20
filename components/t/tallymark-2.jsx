import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi49o-bqs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yi49o-bqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tallymark-2"} {...others} />);
}

export default Component;
