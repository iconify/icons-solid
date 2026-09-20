import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg1mfnptg.css';
import '../../css/l/l6wc1bw2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hg1mfnptg"/><path class="l6wc1bw2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:browser-com-bold"} {...others} />);
}

export default Component;
