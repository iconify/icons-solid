import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9xgvhb6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i9xgvhb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:search-alt-line"} {...others} />);
}

export default Component;
