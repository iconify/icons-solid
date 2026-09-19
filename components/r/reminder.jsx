import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5e10sboi.css';
import '../../css/n/n_757dk6o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h5e10sboi"/><path class="n_757dk6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:reminder"} {...others} />);
}

export default Component;
