import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1930tbml.css';
import '../../css/w/wqxo31blv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h1930tbml"/><path class="wqxo31blv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mode-text-filled"} {...others} />);
}

export default Component;
