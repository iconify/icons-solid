import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykpab4sys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ykpab4sys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:adobe"} {...others} />);
}

export default Component;
