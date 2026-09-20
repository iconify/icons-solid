import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf6lz4lbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cf6lz4lbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:bluetooth-line"} {...others} />);
}

export default Component;
