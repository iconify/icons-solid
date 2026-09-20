import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/simk8wbob.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="simk8wbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:headset-solid"} {...others} />);
}

export default Component;
