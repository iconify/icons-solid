import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut7y1yr2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ut7y1yr2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:number-22-small"} {...others} />);
}

export default Component;
