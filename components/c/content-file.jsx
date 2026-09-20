import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgy9fjbif.css';
import '../../css/f/fvtvtsbqq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jgy9fjbif"/><path class="fvtvtsbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:content-file"} {...others} />);
}

export default Component;
