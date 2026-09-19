import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-42gfrws.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f-42gfrws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:arrow-elbow-up-right"} {...others} />);
}

export default Component;
