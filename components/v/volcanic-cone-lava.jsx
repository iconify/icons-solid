import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6f7jkmro.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o6f7jkmro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:volcanic-cone-lava"} {...others} />);
}

export default Component;
