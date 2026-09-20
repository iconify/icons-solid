import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zixyvouym.css';
import '../../css/k/kbc9ywbnw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zixyvouym"/><path class="kbc9ywbnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:domain-duotone"} {...others} />);
}

export default Component;
