import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zevvw2r7w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zevvw2r7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:2-square-fill"} {...others} />);
}

export default Component;
