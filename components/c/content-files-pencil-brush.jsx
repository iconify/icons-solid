import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-z9gacxo.css';
import '../../css/i/ifoz_0z4w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f-z9gacxo"/><path class="ifoz_0z4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-pencil-brush"} {...others} />);
}

export default Component;
