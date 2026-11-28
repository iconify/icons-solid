import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpmu4kbif.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xpmu4kbif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:database-minus-solid"} {...others} />);
}

export default Component;
