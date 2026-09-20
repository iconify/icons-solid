import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpovbmj2v.css';
import '../../css/j/j1pwc24pd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wpovbmj2v"/><path clip-rule="evenodd" class="j1pwc24pd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sort-file-type-asc-16"} {...others} />);
}

export default Component;
