import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3fi1ehfc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f3fi1ehfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:smile-slight-fill-16"} {...others} />);
}

export default Component;
