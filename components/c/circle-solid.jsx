import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtitn8o0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dtitn8o0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:circle-solid"} {...others} />);
}

export default Component;
