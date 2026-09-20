import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-r60-bqt.css';
import '../../css/b/bkk1zoblz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x-r60-bqt"/><path class="bkk1zoblz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:map-navigation-pin-location-1"} {...others} />);
}

export default Component;
