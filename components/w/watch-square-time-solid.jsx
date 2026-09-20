import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aglw7i7ro.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="aglw7i7ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:watch-square-time-solid"} {...others} />);
}

export default Component;
