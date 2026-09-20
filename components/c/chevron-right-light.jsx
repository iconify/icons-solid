import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnr0-ab0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xnr0-ab0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chevron-right-light"} {...others} />);
}

export default Component;
