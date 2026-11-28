import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyx8pkdtg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hyx8pkdtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:image-wrap-left-solid"} {...others} />);
}

export default Component;
