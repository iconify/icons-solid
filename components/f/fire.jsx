import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1fb8tbny.css';
import '../../css/o/oyc5ru9aq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a1fb8tbny duoicon-primary-layer"/><path class="duoicon-secondary-layer oyc5ru9aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:fire"} {...others} />);
}

export default Component;
