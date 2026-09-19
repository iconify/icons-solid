import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdx3r-bkw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdx3r-bkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:self-care-filled"} {...others} />);
}

export default Component;
