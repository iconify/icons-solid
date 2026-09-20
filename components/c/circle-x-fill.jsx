import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jawpx2m9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jawpx2m9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-x-fill"} {...others} />);
}

export default Component;
