import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcim_2ucb.css';
import '../../css/a/amu1h0n4r.css';
import '../../css/p/pgvjdacxw.css';
import '../../css/g/ghp9deben.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xcim_2ucb"/><path class="amu1h0n4r"/><path class="pgvjdacxw"/><path class="ghp9deben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:export-cable-20-bold"} {...others} />);
}

export default Component;
