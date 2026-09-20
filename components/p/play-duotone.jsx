import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3qp6x1gw.css';
import '../../css/c/cg710qboy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z3qp6x1gw"/><path class="cg710qboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:play-duotone"} {...others} />);
}

export default Component;
