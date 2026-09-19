import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suoc8zbdv.css';

const viewBox = {"width":1728,"height":1728};
const content = `<path class="suoc8zbdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:circle-o-notch"} {...others} />);
}

export default Component;
