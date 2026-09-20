import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-cnhtb7g.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-7};
const content = `<path class="s-cnhtb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:unordered-list"} {...others} />);
}

export default Component;
