import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrdvnvboj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nrdvnvboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:caret-left-square"} {...others} />);
}

export default Component;
