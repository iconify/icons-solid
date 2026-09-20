import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnolt0wrb.css';
import '../../css/q/q6oeacb7k.css';
import '../../css/l/lflficb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jnolt0wrb"/><path class="q6oeacb7k"/><path class="lflficb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-duotone"} {...others} />);
}

export default Component;
