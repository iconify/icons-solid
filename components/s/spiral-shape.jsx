import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx5-h5-aa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dx5-h5-aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:spiral-shape"} {...others} />);
}

export default Component;
