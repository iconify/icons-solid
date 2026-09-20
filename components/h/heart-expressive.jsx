import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5zindb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a5zindb7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:heart-expressive"} {...others} />);
}

export default Component;
