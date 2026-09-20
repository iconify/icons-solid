import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhixw6bhi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fhixw6bhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hourglass"} {...others} />);
}

export default Component;
