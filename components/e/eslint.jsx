import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fipcg1rcz.css';
import '../../css/g/gtk4lacos.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fipcg1rcz"/><path class="gtk4lacos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:eslint"} {...others} />);
}

export default Component;
