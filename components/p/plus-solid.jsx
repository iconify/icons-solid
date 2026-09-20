import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww1mpb9-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ww1mpb9-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:plus-solid"} {...others} />);
}

export default Component;
