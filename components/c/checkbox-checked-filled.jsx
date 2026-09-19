import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnyx6qb8j.css';
import '../../css/u/u3nzwyrar.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dnyx6qb8j"/><path class="u3nzwyrar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:checkbox-checked-filled"} {...others} />);
}

export default Component;
