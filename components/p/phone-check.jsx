import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zeh_gubsr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zeh_gubsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:phone-check"} {...others} />);
}

export default Component;
