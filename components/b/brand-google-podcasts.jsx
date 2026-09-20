import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-5e8sbis.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-5e8sbis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-google-podcasts"} {...others} />);
}

export default Component;
