import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_ra0tbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_ra0tbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:alphabet-korean"} {...others} />);
}

export default Component;
