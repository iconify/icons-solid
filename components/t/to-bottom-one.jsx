import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5eqbcc6x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s5eqbcc6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:to-bottom-one"} {...others} />);
}

export default Component;
