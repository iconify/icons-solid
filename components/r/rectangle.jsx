import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyhvcqbfs.css';

const viewBox = {"width":42,"height":42};
const content = `<path class="uyhvcqbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"topcoat:rectangle"} {...others} />);
}

export default Component;
