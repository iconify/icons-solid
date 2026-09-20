import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn3-hqbra.css';
import '../../css/r/r-lddkblj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wn3-hqbra"/><path class="r-lddkblj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:signout-alt-light"} {...others} />);
}

export default Component;
