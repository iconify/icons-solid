import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkxv-k3lx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fkxv-k3lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:shrink-vertical-solid"} {...others} />);
}

export default Component;
