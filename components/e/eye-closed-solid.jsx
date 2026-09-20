import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd75nn-_w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bd75nn-_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:eye-closed-solid"} {...others} />);
}

export default Component;
