import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug10fabmp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ug10fabmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:audio-lines-search-fill"} {...others} />);
}

export default Component;
