import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yptv8empz.css';
import '../../css/e/e7ebmvq0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yptv8empz"/><path class="e7ebmvq0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:globe-timezone-solid"} {...others} />);
}

export default Component;
