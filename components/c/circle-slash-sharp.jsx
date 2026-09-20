import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrk_5v7yi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nrk_5v7yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-slash-sharp"} {...others} />);
}

export default Component;
