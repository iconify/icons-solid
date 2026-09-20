import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlxyymbyb.css';
import '../../css/w/wgvkkuyqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vlxyymbyb"/><path class="wgvkkuyqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:amazon-original"} {...others} />);
}

export default Component;
