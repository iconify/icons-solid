import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz0_h5o9w.css';
import '../../css/a/adkjrqbfe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jz0_h5o9w"/><path class="adkjrqbfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reclaimerr"} {...others} />);
}

export default Component;
