import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-fum9tds.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o-fum9tds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:collection-fill"} {...others} />);
}

export default Component;
