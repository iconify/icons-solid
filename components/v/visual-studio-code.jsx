import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvc-74b_m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dvc-74b_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:visual-studio-code"} {...others} />);
}

export default Component;
