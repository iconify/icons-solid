import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-7h8fb2z.css';
import '../../css/c/cega53b8w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-7h8fb2z"/><path class="cega53b8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:pc-solid"} {...others} />);
}

export default Component;
