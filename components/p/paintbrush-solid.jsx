import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sck_21-ib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sck_21-ib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:paintbrush-solid"} {...others} />);
}

export default Component;
