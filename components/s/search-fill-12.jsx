import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6m002bvn.css';
import '../../css/s/sgxi3fe_a.css';

const viewBox = {"width":12,"height":12};
const content = `<circle class="f6m002bvn"/><path class="sgxi3fe_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:search-fill-12"} {...others} />);
}

export default Component;
