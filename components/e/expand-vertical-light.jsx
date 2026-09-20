import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhk4w5u-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bhk4w5u-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:expand-vertical-light"} {...others} />);
}

export default Component;
