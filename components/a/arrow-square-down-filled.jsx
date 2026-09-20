import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ah8l-e6gx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ah8l-e6gx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-square-down-filled"} {...others} />);
}

export default Component;
