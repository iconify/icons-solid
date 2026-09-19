import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yypzf8b8r.css';
import '../../css/s/s1altqbfo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yypzf8b8r"/><path class="s1altqbfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-graphql-open"} {...others} />);
}

export default Component;
