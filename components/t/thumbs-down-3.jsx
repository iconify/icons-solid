import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gapzs4b1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gapzs4b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:thumbs-down-3"} {...others} />);
}

export default Component;
