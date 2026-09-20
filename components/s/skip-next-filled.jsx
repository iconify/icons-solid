import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9gyv8bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l9gyv8bbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:skip-next-filled"} {...others} />);
}

export default Component;
