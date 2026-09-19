import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btnvbfz_a.css';

const viewBox = {"width":384,"height":488};
const content = `<path class="btnvbfz_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:livejournal"} {...others} />);
}

export default Component;
