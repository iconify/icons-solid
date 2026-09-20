import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7x-tfbpm.css';
import '../../css/o/o_3vlpb9b.css';
import '../../css/p/pfd8kr3ea.css';
import '../../css/b/blteqxbjb.css';
import '../../css/w/wcnbrab-i.css';
import '../../css/i/i63qj7bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u7x-tfbpm"/><path class="o_3vlpb9b"/><path class="pfd8kr3ea"/><path class="blteqxbjb"/><path class="wcnbrab-i"/><path class="i63qj7bzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tavily"} {...others} />);
}

export default Component;
