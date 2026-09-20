import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/styafgb6l.css';
import '../../css/h/ht6h5ebzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="styafgb6l"/><path clip-rule="evenodd" class="ht6h5ebzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:data-date-light"} {...others} />);
}

export default Component;
