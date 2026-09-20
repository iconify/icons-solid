import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da-mhk6xd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="da-mhk6xd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:open-in-new"} {...others} />);
}

export default Component;
