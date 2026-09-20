import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqbp4ccby.css';
import '../../css/f/fos7arooz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dqbp4ccby"/><path class="fos7arooz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:anchor-bottom-right-16"} {...others} />);
}

export default Component;
