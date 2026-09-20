import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pltnho7ea.css';
import '../../css/v/voyj7e3gc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pltnho7ea"/><path class="voyj7e3gc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:anchor-top-left-16"} {...others} />);
}

export default Component;
