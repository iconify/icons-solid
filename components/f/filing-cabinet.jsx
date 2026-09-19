import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag5m9z64z.css';
import '../../css/z/z5kljvobp.css';
import '../../css/i/iv0739boz.css';
import '../../css/y/ynuwzd5vq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ag5m9z64z"/><path class="z5kljvobp"/><path class="iv0739boz"/><path class="ynuwzd5vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:filing-cabinet"} {...others} />);
}

export default Component;
