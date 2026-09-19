import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz-ewac9b.css';
import '../../css/c/c-39a_bhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wz-ewac9b"/><path class="c-39a_bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:automl-vision"} {...others} />);
}

export default Component;
