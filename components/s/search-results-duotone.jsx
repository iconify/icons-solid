import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6e9c4ivo.css';
import '../../css/s/s264hrbbe.css';
import '../../css/m/m5n_ehoon.css';
import '../../css/k/kemfy5bie.css';
import '../../css/d/d9s5sfbtl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j6e9c4ivo"/><path clip-rule="evenodd" class="s264hrbbe"/><path class="m5n_ehoon"/><path clip-rule="evenodd" class="kemfy5bie"/><path class="d9s5sfbtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:search-results-duotone"} {...others} />);
}

export default Component;
