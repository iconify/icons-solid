import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmbf_2bij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pmbf_2bij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:play2-filled"} {...others} />);
}

export default Component;
