import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sma2sc7pm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sma2sc7pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:bolt-slash"} {...others} />);
}

export default Component;
