import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oody99b2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oody99b2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:maximize-circle-filled"} {...others} />);
}

export default Component;
