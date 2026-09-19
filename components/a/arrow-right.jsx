import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulyr7qb5y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ulyr7qb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:arrow-right"} {...others} />);
}

export default Component;
