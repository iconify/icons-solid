import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k89qbfh2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k89qbfh2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:clapperboard-open-play"} {...others} />);
}

export default Component;
