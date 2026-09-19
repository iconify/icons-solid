import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-2li_llf.css';
import '../../css/n/n9o42e7zi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j-2li_llf"/><path class="n9o42e7zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:sort-amount-asc"} {...others} />);
}

export default Component;
