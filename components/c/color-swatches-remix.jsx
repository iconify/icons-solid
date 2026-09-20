import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqi0vz2bc.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="sqi0vz2bc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:color-swatches-remix"} {...others} />);
}

export default Component;
