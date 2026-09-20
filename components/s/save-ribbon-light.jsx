import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utw4vn0zz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utw4vn0zz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:save-ribbon-light"} {...others} />);
}

export default Component;
