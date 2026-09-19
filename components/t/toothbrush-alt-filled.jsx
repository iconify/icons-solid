import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpm5gpbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpm5gpbgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:toothbrush-alt-filled"} {...others} />);
}

export default Component;
