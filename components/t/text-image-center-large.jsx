import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wrbv8jyks.css';
import '../../css/u/ulvxzv0rx.css';
import '../../css/o/o3ogfsbbi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wrbv8jyks"/><path class="ulvxzv0rx"/><path class="o3ogfsbbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:text-image-center-large"} {...others} />);
}

export default Component;
