import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c65-ehvfy.css';
import '../../css/d/d7tt0bbas.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c65-ehvfy"/><path class="d7tt0bbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ruins-48"} {...others} />);
}

export default Component;
