import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivmprj5xh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ivmprj5xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:strongbox-filled"} {...others} />);
}

export default Component;
