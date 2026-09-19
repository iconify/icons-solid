import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/paef-ikde.css';
import '../../css/o/o04e0f4tg.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="paef-ikde"/><circle class="o04e0f4tg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:tag"} {...others} />);
}

export default Component;
