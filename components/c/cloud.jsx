import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvo00ebqq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nvo00ebqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:cloud"} {...others} />);
}

export default Component;
