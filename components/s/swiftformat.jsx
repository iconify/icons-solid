import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu96i2m6r.css';
import '../../css/f/fbfcujy1a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pu96i2m6r"/><path class="fbfcujy1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:swiftformat"} {...others} />);
}

export default Component;
