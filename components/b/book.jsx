import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk7i4qv0w.css';
import '../../css/b/bu5x6-ooy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lk7i4qv0w"/><path class="bu5x6-ooy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:book"} {...others} />);
}

export default Component;
