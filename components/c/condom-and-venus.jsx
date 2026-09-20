import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lda7zbb5d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lda7zbb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:condom-and-venus"} {...others} />);
}

export default Component;
