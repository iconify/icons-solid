import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb6dvfbbn.css';
import '../../css/a/ajl3hnenw.css';
import '../../css/k/k6canw58a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rb6dvfbbn"/><path class="ajl3hnenw"/><path class="k6canw58a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:git-branch-48"} {...others} />);
}

export default Component;
