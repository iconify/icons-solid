import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz7aj4fgu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cz7aj4fgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:grid-small"} {...others} />);
}

export default Component;
