import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izck_4u8f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="izck_4u8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:venus-and-mars"} {...others} />);
}

export default Component;
