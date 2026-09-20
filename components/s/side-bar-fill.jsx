import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3gd2abci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e3gd2abci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:side-bar-fill"} {...others} />);
}

export default Component;
