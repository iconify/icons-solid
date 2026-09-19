import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe_qtl4kr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fe_qtl4kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:inbox-fill-16"} {...others} />);
}

export default Component;
