import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz48-8bjg.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="pz48-8bjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:check"} {...others} />);
}

export default Component;
