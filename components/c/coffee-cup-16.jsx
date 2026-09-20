import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow0kztb5r.css';
import '../../css/h/hq1cjqbib.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ow0kztb5r"/><path class="hq1cjqbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:coffee-cup-16"} {...others} />);
}

export default Component;
