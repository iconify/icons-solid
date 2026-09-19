import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d47xi2b9o.css';
import '../../css/b/bkpb9nbrp.css';
import '../../css/t/t47_ldbyv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d47xi2b9o"/><path class="bkpb9nbrp"/><path class="t47_ldbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:pound"} {...others} />);
}

export default Component;
