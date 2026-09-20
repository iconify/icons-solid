import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo7mz2bml.css';
import '../../css/n/nuz4awhaa.css';
import '../../css/a/a6uabbbrn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qo7mz2bml"/><path class="nuz4awhaa"/><path class="a6uabbbrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-dribbble-filled"} {...others} />);
}

export default Component;
