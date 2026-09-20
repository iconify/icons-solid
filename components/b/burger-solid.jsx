import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/biljftzdn.css';
import '../../css/c/cg2ro0qum.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="biljftzdn"/><path clip-rule="evenodd" class="cg2ro0qum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:burger-solid"} {...others} />);
}

export default Component;
