import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_o6y9bnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_o6y9bnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tag-gloss"} {...others} />);
}

export default Component;
