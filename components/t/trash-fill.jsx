import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_uf02nri.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k_uf02nri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:trash-fill"} {...others} />);
}

export default Component;
