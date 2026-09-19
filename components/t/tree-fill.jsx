import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar9t0wyvm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ar9t0wyvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:tree-fill"} {...others} />);
}

export default Component;
