import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grcycm9of.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="grcycm9of"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:bone-24px"} {...others} />);
}

export default Component;
