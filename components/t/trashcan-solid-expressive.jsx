import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrdu5lrsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hrdu5lrsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:trashcan-solid-expressive"} {...others} />);
}

export default Component;
