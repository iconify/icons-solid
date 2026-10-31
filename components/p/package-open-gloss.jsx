import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv78kg08c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bv78kg08c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-open-gloss"} {...others} />);
}

export default Component;
